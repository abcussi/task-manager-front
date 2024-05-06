// src/hooks/useRegister.ts

import { URL_REGISTER } from '@src/constants/common';
import { useState } from 'react';
import { setCookie } from './AuthService';
import { fetchByEmail } from './userService';
import { useTaskActions } from '@src/store/hooks/hooks';

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
  const [msg, setMessage] = useState<string | null>(null);
  const { setUser } = useTaskActions();

  const register = async (name: string, email: string, password: string): Promise<RegisterResponse | null> => {
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(URL_REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Error something went wrong!');
      }

      const data = await response.json();

      setCookie('x-access-token', data.data, 30);
      const userInfoResponse = await fetchByEmail(email);

      setUser({
          token: data.data,
          _id: userInfoResponse.data._id,
          name: userInfoResponse.data.name,
          email: userInfoResponse.data.email
      });
      setLoading(false);
      setMessage("SUCCESS!!!");
      

      return data as RegisterResponse;
    } catch (err: unknown) {
      setLoading(false);
      setMessage((err as Error).message);
      return null;
    }
  };

  return { register, loading, msg };
};
