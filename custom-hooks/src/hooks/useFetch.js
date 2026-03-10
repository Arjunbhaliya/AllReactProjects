import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
    const [fetchData, setFetchData] = useState(initialValue);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const places = await fetchFn();
                setFetchData(places);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch Data.' });
            }
            setIsFetching(false);
        }

        fetchData();
    }, []);

    return {
        fetchData,
        setFetchData,
        isFetching,
        error
    }
}