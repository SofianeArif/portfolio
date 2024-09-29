import React, {useState} from "react";
import {Box, Button, Drawer, Fab, Rating, TextField, Typography,} from "@mui/material";
import {StarHalfRounded} from "@mui/icons-material";
import {Review} from "../../types/Review";
import {useSnackbar} from "../layout/SnackbarContext";
import * as reviewService from "../../services/ReviewService";

const ReviewsFB = () => {
    const [open, setOpen] = useState(false);
    const { showSnackbar } = useSnackbar();

    const initialData: Review = {
        firstName: "",
        lastName: "",
        rating: 5,
        comment: "",
    };

    const [review, setReview] = useState<Review>(initialData);

    const toggleDrawer = (isOpen: boolean) => () => {
        setOpen(isOpen);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setReview((prevReview) => ({
            ...prevReview,
            [name]: value,
        }));
    };

    const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
        setReview((prevReview) => ({
            ...prevReview,
            rating: newValue,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await reviewService.postReview(review);
            showSnackbar("Merci pour votre avis !", "success");
        } catch (error) {
            showSnackbar("Erreur lors de l'envoi de l'avis.", "error");
        } finally {
            setReview(initialData);
            setOpen(false);
        }
    };

    return (
        <>
            <Fab
                color="secondary"
                aria-label="Laisser un avis"
                onClick={toggleDrawer(true)}
                sx={{ position: "fixed", bottom: 16, right: 16 }}
            >
                <StarHalfRounded />
            </Fab>

            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                sx={{ color: 'background.paper' }}
            >
                <Box
                    sx={{
                        width: { xs: 300, sm: 400 },
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    component="form"
                    onSubmit={handleSubmit}
                >
                    <Typography variant="h6" gutterBottom>
                        Laissez un avis
                    </Typography>

                    <Rating
                        name="rating"
                        value={review.rating}
                        onChange={handleRatingChange}
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        fullWidth
                        label="Prénom"
                        variant="outlined"
                        color="secondary"
                        name="firstName"
                        required={true}
                        value={review.firstName}
                        onChange={handleInputChange}
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        fullWidth
                        label="Nom"
                        variant="outlined"
                        color="secondary"
                        name="lastName"
                        required={true}
                        value={review.lastName}
                        onChange={handleInputChange}
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        fullWidth
                        label="Commentaire"
                        variant="outlined"
                        color="secondary"
                        name="comment"
                        required={true}
                        multiline
                        rows={4}
                        value={review.comment}
                        onChange={handleInputChange}
                        sx={{ mb: 2 }}
                    />

                    <Button type="submit" variant="contained" color="secondary" fullWidth>
                        Envoyer
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};


export default ReviewsFB;
