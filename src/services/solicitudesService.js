import bffApi from "./bffApi";


export const crearSolicitud = async(data)=>{

    const response =
        await bffApi.post(
            "/v1/solicitudes",
            data
        );


    return response.data;

};



export const obtenerMisSolicitudes = async()=>{


    const response =
        await bffApi.get(
            "/v1/solicitudes/mias"
        );


    return response.data;

};



export const obtenerTodasLasSolicitudes = async()=>{


    const response =
        await bffApi.get(
            "/v1/solicitudes"
        );


    return response.data;

};



export const actualizarEstado = async(id,data)=>{


    const response =
        await bffApi.patch(
            `/v1/solicitudes/${id}/estado`,
            data
        );


    return response.data;

};