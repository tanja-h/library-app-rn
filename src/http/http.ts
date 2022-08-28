import { LoginUser } from "../utils/typeUtils";

interface LoginUserResponse {
    error: string | null,
    name: string | null
};

export const loginUser = async ({ email, password }: LoginUser): Promise<LoginUserResponse> => {
    try {
        const response = await fetch('http://localhost:5000/users/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        });

        const { token, name, error } = await response.json();
        return { name, error };

    } catch (error) {
        return { error: (error as Error).message as string, name: null };
    }
};