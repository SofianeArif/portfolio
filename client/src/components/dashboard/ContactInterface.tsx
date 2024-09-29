import React, {useEffect, useState} from 'react';
import {Box, CircularProgress, IconButton, List, ListItem, ListItemText, Typography} from '@mui/material';
import * as contactService from "../../services/ContactService";
import {Contact} from "../../types/Contact";
import {ArrowBackIosNew} from "@mui/icons-material";

export const ContactInterface : React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const {data} = await contactService.getAll();
                setContacts(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des contacts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

     const handleContactClick = (contact: Contact) => {
        setSelectedContact(contact);
    };

     const handleReturnClick = () => {
        setSelectedContact(null);
     }

    return (
        <Box minHeight="500px">
            {loading ? (
                <CircularProgress sx={{position: 'absolute', top: '50%', left: '56%'}}/>
            ) : (
                selectedContact ? (
                    <ContactDetails contact={selectedContact} onReturnClick={handleReturnClick}/>
                ) : (
                    contacts.length > 0 ? <ContactList contacts={contacts} onContactSelect={handleContactClick}/> : <ContactListEmpty />
                )
            )}
        </Box>
    );
};

const ContactList : React.FC<{ contacts : Contact[], onContactSelect : (contact : Contact) => void}> = ({contacts, onContactSelect}) => {
    return (
        <List>
            {contacts.map((contact) => (
                <ListItem key={contact.id} onClick={() => onContactSelect(contact)} sx={(theme) => ({cursor: 'pointer', "&:hover": {backgroundColor: theme.palette.grey}})}>
                    <ListItemText
                        primary={`${contact.firstName} ${contact.lastName}`}
                        secondary={contact.email}
                    />
                    <ListItemText
                        primary="Subject"
                        secondary={contact.subject}>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );
}

const ContactListEmpty : React.FC = () => {
    return (
        <Typography variant="h6" align="center">
            Aucun message pour le moment.
        </Typography>
    );
}

const ContactDetails : React.FC<{ contact : Contact, onReturnClick: () => void }> = ({contact, onReturnClick}) => {
    return (
        <Box>
            <IconButton onClick={onReturnClick}>
                <ArrowBackIosNew/>
            </IconButton>
            <Typography variant="h6">
                {contact.firstName} {contact.lastName}
            </Typography>
            <Typography variant="body1">
                {contact.email}
            </Typography>
            <Typography variant="body2">
                {contact.message}
            </Typography>
        </Box>
    );
}
