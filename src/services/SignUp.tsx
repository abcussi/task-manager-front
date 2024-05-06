// src/hooks/useRegister.ts

import { useState } from 'react';

interface RegisterResponse {
  // Define la estructura de la respuesta de registro
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (name: string, email: string, password: string): Promise<RegisterResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Error al registrarse');
      }

      const data = await response.json();
      setLoading(false);
      return data as RegisterResponse;
    } catch (err: unknown) {
      setLoading(false);
      setError((err as Error).message);
      return null;
    }
  };

  return { register, loading, error };
};
