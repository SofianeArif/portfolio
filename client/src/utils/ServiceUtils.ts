import axios from "axios";

const apiEndpoint = 'http://localhost:4242'

/**
 * This function is used to make a POST request to the API
 * @param modelName
 * @param dataIn
 */
export async function postAsync(modelName : string, dataIn? : any) : Promise<any> {
    return await axios.post(apiEndpoint + "/" + modelName, dataIn);
}

/**
 * This function is used to make a GET request to the API
 * @param modelName
 * @param id
 * @param limit
 */
export async function getAsync(modelName : string, id? : number, limit? : number) : Promise<any> {
    return await axios.get(apiEndpoint + "/" + modelName + (id ?? ''));
}

/**
 * This function is used to make a PUT request to the API
 * @param modelName
 * @param id
 * @param data
 */
export async function putAsync(modelName : string, id : number, data? : any) : Promise<any> {
    return await axios.put(apiEndpoint + "/" + modelName + "/" + id, data);
}

/**
 * This function is used to make a PATCH request to the API
 * @param modelName
 * @param id
 */
export async function patchAsync(modelName : string, id : number) : Promise<any> {
    return await axios.patch(apiEndpoint + "/" + modelName + id);
}

/**
 * This function is used to make a DELETE request to the API
 * @param modelName
 * @param id
 */
export async function deleteAsync(modelName : string, id : number) : Promise<any> {
    return await axios.delete(apiEndpoint + "/" + modelName + "/" + id);
}
