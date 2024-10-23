import React, {useEffect, useState} from 'react';
import {Box, CircularProgress, Grid2 as Grid, Typography, Switch, Rating, IconButton} from '@mui/material';
import * as reviewService from "../../services/ReviewService";
import {Review} from "../../types/Review";
import {useSnackbar} from "../layout/SnackbarContext";
import {DeleteForever} from "@mui/icons-material";

export const ReviewsInterface : React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const {showSnackbar} = useSnackbar();

    const fetchReviews = async () => {
        try {
            const {data} = await reviewService.getAll();
            setReviews(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des avis:', error);
        } finally {
            setLoading(false);
        }
    };

    const deleteReview = async (reviewId : number) => {
        try {
            console.log('Suppression de l\'avis:', reviewId);
            await reviewService.deleteReview(reviewId);
            console.log('Avis supprimé avec succès');
            showSnackbar('Avis supprimé avec succès', 'success');
            setReviews(prevReviews => prevReviews.filter(review => review.id !== reviewId));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleReviewApproval = async (reviewId : number) => {
        try {
            const review = reviews.find((review) => review.id === reviewId);
            if (review) {
                await reviewService.update(review.id!, {approved: !review.approved});
                showSnackbar('Avis mis à jour avec succès', 'success');
                fetchReviews();
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'avis:', error);
        }
    };

    return (
        <Box minHeight="500px">
            {loading ? (
                <CircularProgress sx={{position: 'absolute', top: '50%', left: '56%'}}/>
            ) : (
                reviews.length > 0 ?
                    <ReviewList reviews={reviews} onDelete={deleteReview} onReviewApproval={handleReviewApproval}/> :
                    <ReviewListEmpty/>
            )}
        </Box>
    );
};

const ReviewList : React.FC<{
    reviews : Review[],
    onReviewApproval : (reviewId : number) => void,
    onDelete : (reviewId : number) => void
}> = ({reviews, onReviewApproval, onDelete}) => {
    return (
        <Grid container spacing={1}>
            <Grid container size={12}>
                <Grid size={3}>
                    <Typography variant="body1" fontWeight="bold">
                        Name
                    </Typography>
                </Grid>
                <Grid size={3}>
                    <Typography variant="body1" fontWeight="bold">
                        Rating
                    </Typography>
                </Grid>
                <Grid size={4}>
                    <Typography variant="body1" fontWeight="bold">
                        Comment
                    </Typography>
                </Grid>
                <Grid size={1}>
                    <Typography variant="body1" fontWeight="bold" align="center">
                        Approved
                    </Typography>
                </Grid>
                <Grid size={1}>
                    <Typography variant="body1" fontWeight="bold" align="center">
                        Delete
                    </Typography>
                </Grid>
            </Grid>

            {/* Reviews list */}
            {reviews.map((review) => (
                <Grid container spacing={0} size={12} key={review.id} alignItems="center"
                      sx={{borderBottom: '1px solid #ccc', padding: 2}}>
                    <Grid size={3}>
                        <Typography variant="body1">
                            {`${review.firstName} ${review.lastName}`}
                        </Typography>
                    </Grid>
                    <Grid size={3}>
                        <Rating value={review.rating} readOnly/>
                    </Grid>
                    <Grid size={4}>
                        <Typography variant="body2">
                            {review.comment}
                        </Typography>
                    </Grid>
                    <Grid size={1} sx={{textAlign: 'center'}}>
                        <Switch
                            checked={review.approved}
                            onChange={() => onReviewApproval(review.id as number)}
                            color="primary"
                            disabled={true}
                        />
                    </Grid>
                    <Grid size={1} sx={{textAlign: 'center'}}>
                        <IconButton onClick={() => onDelete(review.id as number)}>
                            <DeleteForever/>
                        </IconButton>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

const ReviewListEmpty : React.FC = () => {
    return (
        <Typography variant="h6" align="center">
            Pas d'avis pour le moment.
        </Typography>
    );
};
