
// src/hooks/useStatuses.ts
import { useEffect, useState } from 'react';
import { URL_STATUSES } from '@src/constants/common';

export interface statusesInterface {
    _id: string;
    status: string;
}


const useStatuses = () => {
    const [statuses, setStatuses] = useState<statusesInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const response = await fetch(URL_STATUSES);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                console.log(data)
                setStatuses(data);
            } catch (err: any ) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStatuses();
    }, []);

    return { statuses, loading, error };
};

export default useStatuses;
