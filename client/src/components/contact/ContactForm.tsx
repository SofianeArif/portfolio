import React, {useState} from "react";
import {Box, TextField, Button, Grid2 as Grid, Typography} from "@mui/material";
import {useSnackbar} from "../layout/SnackbarContext";
import * as contactService from "../../services/ContactService";
import {Contact} from "../../types/Contact";

type ContactFormType = {
    firstName : string;
    lastName : string;
    email : string;
    subject : string;
    message : string;
};

const ContactForm = () => {
    const {showSnackbar} = useSnackbar();

    const initialData : Contact = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    };

    const [contact, setContact] = useState<ContactFormType>(initialData);

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setContact({...contact, [name]: value});
    };

    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        try {
            await contactService.post(contact);
            showSnackbar("Merci pour votre message !", "success");
        } catch (error) {
            showSnackbar("Erreur lors de l'envoi du message.", "error");
        } finally {
            setContact(initialData);
        }
    };

    return (
        <Box id="contact" sx={contactContainerStyle}>
            <Typography variant="h3" align="center" color="white" sx={{mb: 3}}>
                Contactez-moi
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid size={{xs: 12, sm: 6}}>
                        <TextField
                            label="Prénom"
                            variant="outlined"
                            name="firstName"
                            color="secondary"
                            fullWidth
                            required
                            value={contact.firstName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid size={{xs: 12, sm: 6}}>
                        <TextField
                            label="Nom"
                            variant="outlined"
                            name="lastName"
                            color="secondary"
                            fullWidth
                            required
                            value={contact.lastName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            color="secondary"
                            type="email"
                            fullWidth
                            required
                            value={contact.email}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            label="Sujet"
                            variant="outlined"
                            name="subject"
                            color="secondary"
                            fullWidth
                            required
                            value={contact.subject}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            label="Message"
                            variant="outlined"
                            name="message"
                            color="secondary"
                            multiline
                            rows={4}
                            fullWidth
                            required
                            value={contact.message}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid size={12} textAlign="end">
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            Envoyer
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

// Styles
const contactContainerStyle = {
    backgroundColor: 'background.paper',
    padding: '50px 0',
    color: 'white',
    maxWidth: '800px',
    margin: '0 auto',
};

export default ContactForm;
