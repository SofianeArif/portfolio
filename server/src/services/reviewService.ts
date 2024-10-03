import Review from '../models/Review';

export class ReviewService {
    static async createReview(data: {
        firstName: string;
        lastName: string;
        email: string;
        rating: number;
        comment: string
    }) {
        return await Review.create(data);
    }

    static async getAll() {
        return await Review.findAll({order: [['createdAt', 'DESC']]});
    }

    static async getALlApproved() {
        return await Review.findAll({
            attributes: ["id", "firstName", "lastName", "email", "rating", "comment"],
            limit: 3,
            order: [['createdAt', 'DESC']]
        });
    }

    static async getById(id: number) {
        return await Review.findByPk(id);
    }

    static async update(id: number, data: {
        firstName: string;
        lastName: string;
        rating: number;
        comment: string
    }) {
        const review = await Review.findByPk(id);
        return await review?.update(data);
    }

    static async delete(id: number) {
        const review = await Review.findByPk(id);
        review?.destroy();
        return review;
    }
}
