import { useState, useRef, useEffect } from "react";
import getApiResponse from "../utils/getApiResponse";
import QueryType from "../types/QueryType";

const initialQueryState = {
    isLoading: false,
    isError: false,
    response: null,
};

const useFetchData = <T>(search: string | null, endPointParams: string) => {
    const [query, setQuery] = useState<QueryType<T>>(initialQueryState);
    const hasMounted = useRef(false);

    useEffect(() => {
    const abortController = new AbortController();

    if (!hasMounted.current) {
        hasMounted.current = true;
        return;
    }

    const fetchLocations = async () => {
        setQuery((prevState) => ({...prevState, isLoading: true, isError: false}));

        try {
        const response = await getApiResponse<T>(import.meta.env.VITE_BASE_URL, endPointParams, abortController.signal);
        
        setQuery({response, isLoading: false, isError: false});

        } catch (error) {
        if(error instanceof Error){
            if(error.name === 'AbortError') {
            console.log('Request was aborted');
            } else {
            setQuery((prevState) => ({...prevState, isLoading: false, isError: true}));
            console.error('Error fetching data:', error.message);
            }

        } else {
            console.error('An unexpected error occurred:', error);
            setQuery((prevState) => ({ ...prevState, isLoading: false, isError: true }));
        }
        }
    }

    fetchLocations();

    return () => {
        abortController.abort();
    }
    }, [search, endPointParams]);

    return query;
}
export default useFetchData;