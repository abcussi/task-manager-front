import { URL_CSRF } from '@src/constants/common';

export const fetchCsrfToken = async () => {
    try {
        const response = await fetch(URL_CSRF, {
            method: 'GET',
            credentials: 'include', // Para enviar y recibir cookies
        });
        if (!response.ok) {
            throw new Error('No se pudo obtener el token CSRF');
        }

        const data = await response.json();
        const csrfToken = data.csrfToken;

        // Set a cookie that expires in 30 minutes
        setCookie('_csrf', csrfToken, 30);

        return csrfToken;
    } catch (error) {
        console.error('Error obteniendo el token CSRF:', error);
        return null;
    }
};


export function setCookie(name:string, value:string, minutes:number) {

    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    const expires = `; expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value || ''}${expires}; path=`;
}
