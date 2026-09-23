import bffApi from "./bffApi";


export const obtenerCatalogo = async () => {

    const response = await bffApi.get(
        "/v1/catalogo"
    );

    return response.data;

};