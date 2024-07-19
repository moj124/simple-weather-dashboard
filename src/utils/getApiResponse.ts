import getApi from "./getApi";

const getApiResponse = async <T>(baseURL: string, params: string, signal: AbortSignal): Promise<T> => {
    const url = baseURL + params;
    
    return await getApi(url, signal);
}
export default getApiResponse;