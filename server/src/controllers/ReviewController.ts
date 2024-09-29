import {Request, Response} from 'express';
import {ReviewService} from '../services/reviewService';

export class ReviewController {
    static async create(req : Request, res : Response) {
        try {
            const review = await ReviewService.createReview(req.body);
            res.status(201).json(review);
        } catch (error) {
            res.status(500).json({error: 'Failed to create review'});
        }
    }

    static async getAll(req : Request, res : Response) {
        try {
            const reviews = await ReviewService.getAll();
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({error: 'Failed to get reviews'});
        }
    }

    static async getAllApproved(req : Request, res : Response) {
        try {
            const reviews = await ReviewService.getALlApproved();
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({error: 'Failed to get reviews'});
        }
    }

    static async getById(id : number) {
        try {
            return await ReviewService.getById(id);
        } catch (error) {
            return {error: 'Failed to get review'};
        }
    }

    static async update(req : Request, res : Response) {
        try {
            const review = await ReviewService.update(parseInt(req.params.id), req.body);
            if (review) {
                res.status(200).json(review);
            } else {
                res.status(404).json({error: 'Review not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Failed to update review'});
        }
    }

    static async delete(req : Request, res : Response) {
        try {
            const r = await ReviewService.delete(parseInt(req.params.id));
            res.status(200).json();
        } catch (error) {
            return {error: 'Failed to delete review'};
        }
    }
}
