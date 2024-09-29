import * as serviceUtils from "../utils/ServiceUtils";


/**
 * Post a contact
 * @param dataIn - Contact to post
 */
export async function post(dataIn : any) {
    return await serviceUtils.postAsync('contact', dataIn);
}

/**
 * Get all contacts
 * @param limit - Maximum number of contacts to return
 */
export async function getAll(limit? : number) {
    return await serviceUtils.getAsync('contact');
}
