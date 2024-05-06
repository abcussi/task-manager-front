import { URL_USER_FIND_BY_EMAIL } from "@src/constants/common";


export interface userInterface {
    _id: string;
    name: string;
    email: string;
    token: string;
}

export const fetchByEmail = async (email: string) => {
    const response = await fetch(URL_USER_FIND_BY_EMAIL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            email: email,
        }),
    });

    if (!response.ok) {
        throw new Error('Error something went wrong!');
    }

    return await response.json();
};
