// src/hooks/useLogin.ts

import { useState } from 'react';
//import { fetchCsrfToken } from './AuthService';
import { URL_LOGIN } from '@src/constants/common';

interface LoginResponse {
    // Define aquí la estructura de los datos que esperas recibir
    token: string;
    user: {
        id: string;
        name: string;
    };
}

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [msg, setMessage] = useState<string | null>(null);

    const login = async (email: string, password: string): Promise<LoginResponse | null> => {
        setLoading(true);
        setMessage(null);
        
        try {
            // configure csrf token for CROSS scripting needs a server
            //et specialToken = await fetchCsrfToken();
            const response = await fetch(URL_LOGIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }

            const data = await response.json();
            setLoading(false);
            setMessage('SUCCESS!!!')
            
            return data as LoginResponse;
            
        } catch (err: unknown) {
            setLoading(false);
            setMessage((err as Error).message);
            return null;
        }
    };

    return { login, loading, msg };
};
