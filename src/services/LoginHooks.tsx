// src/hooks/useLogin.ts

import { useState } from 'react';

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
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string): Promise<LoginResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }

      const data = await response.json();
      setLoading(false);
      return data as LoginResponse;
    } catch (err: unknown) {
      setLoading(false);
      setError((err as Error).message);
      return null;
    }
  };

  return { login, loading, error };
};
