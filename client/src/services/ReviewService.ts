import {Review} from "../types/Review";
import * as serviceUtils from "../utils/ServiceUtils";

export async function update(id : number, review : any) {
    return await serviceUtils.putAsync('review', id, review);
}


/**
 * Post a review
 * @param dataIn - Review to post
 */
export async function postReview(dataIn : Review) {
    return await serviceUtils.postAsync('review', dataIn);
}

/**
 * Get all reviews
 * @param limit - Maximum number of reviews to return
 */
export async function getAll(limit? : number) {
    return await serviceUtils.getAsync('review');
}

/**
 * Get all approved reviews
 * @param limit - Maximum number of reviews to return
 */
export async function getAllApproved(limit? : number) {
    return await serviceUtils.getAsync('review/approved');
}

export async function deleteReview(id : number) {
    return await serviceUtils.deleteAsync('review', id);
}
