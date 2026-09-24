import bffApi from "./bffApi";



export const obtenerOperadores = async()=>{


    const response =
        await bffApi.get(
            "/v1/users/operators"
        );


    return response.data;


};