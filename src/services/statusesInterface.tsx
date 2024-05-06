
// src/hooks/useStatuses.ts
import { useEffect, useState } from 'react';
import { URL_STATUSES } from '@src/constants/common';
import { useTaskActions } from '@src/store/hooks/hooks';

export interface statusesInterface {
    _id: string;
    status: string;
    __v: number;
}


const customUseStatuses = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { setAllStatuses } = useTaskActions();

    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const response = await fetch(URL_STATUSES, {
                    method: 'GET',
                    credentials: 'include', // Para enviar y recibir cookies
                });
                
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setAllStatuses(data.data);
            } catch (err: any ) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStatuses();
    }, []);

    return { loading, error };
};

export default customUseStatuses;
