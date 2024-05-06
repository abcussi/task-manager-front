import React, { useState } from 'react';
import { useLogin } from '@src/services/LoginHooks';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useLogin();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await login(username, password);
        if (response) {
            // Maneja el inicio de sesión exitoso
            console.log('Usuario autenticado:', response.user);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
                <h2 className="text-2xl font-semibold text-center">Iniciar Sesión</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Usuario"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300">
                    Log in
                </button>
                {error && <div className="text-red-600 text-center">{error}</div>}
                <div className="text-center mt-4">
                    <div className="text-center mt-4">
                        <a href="/signup" className="text-blue-500 hover:underline">
                            Already have an account? Sign In
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
