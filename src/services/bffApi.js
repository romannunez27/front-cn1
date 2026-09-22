import axios from "axios";

const BFF_URL = "http://localhost:8080";

export const obtenerUsuarioBackend = async (accessToken) => {

    const response = await axios.get(
        `${BFF_URL}/v1/auth/me`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    );

    return response.data;
};