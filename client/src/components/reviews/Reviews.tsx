import React from "react";
import {Box, Card, CardContent, Grid2 as Grid, Rating, Typography} from "@mui/material";
import {Review} from "../../types/Review";

const Reviews = ({ reviewsData }: { reviewsData: Review[] }) => {
    return (
        <Box id="reviews" sx={reviewsContainerStyle}>
            <Typography variant="h3" align="center" color="white" sx={{ mb: 4 }}>
                Derniers avis des visiteurs
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {reviewsData && reviewsData.length > 0 ? (
                    reviewsData.map((review, index) => (
                        <Grid size={{xs: 12, sm: 6, md: 4}} key={index}>
                            <Card sx={reviewCardStyle}>
                                <CardContent>
                                    <Typography variant="h6" color="rgb(155, 77, 215)">
                                        {review.firstName} {review.lastName}
                                    </Typography>
                                    <Rating
                                        name="read-only"
                                        value={review.rating}
                                        readOnly
                                        precision={0.5}
                                        sx={{ color: "#FFD700", mb: 2 }}
                                    />
                                    <Typography variant="body1" color="textSecondary">
                                        {review.comment}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1" color="white">
                        Aucun avis pour le moment.
                    </Typography>
                )}
            </Grid>
        </Box>
    );
};


// Styles
const reviewsContainerStyle = {
    backgroundColor: '#121212',
    padding: '50px 0',
    color: 'white',
    maxWidth: '1200px',
    margin: '0 auto',
};

const reviewCardStyle = {
    backgroundColor: '#1E1E1E',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
};

export default Reviews;
