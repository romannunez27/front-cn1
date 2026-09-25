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

// Operador
export const actualizarEstado = async(id,data)=>{
    const response =
        await bffApi.patch(
            `/v1/solicitudes/${id}/estado`,
            data
        );
    return response.data;
};

export const obtenerSolicitudesOperador = async()=>{
    const response =
        await bffApi.get(
            "/v1/solicitudes"
        );
    return response.data;
};

export const actualizarEstadoSolicitud = async(
    id,
    estado
)=>{
    const response =
        await bffApi.patch(
            `/v1/solicitudes/${id}/estado`,
            {
                estado
            }
        );
    return response.data;
};

export const registrarAtencion = async(
    id,
    detalle
)=>{
    const response =
        await bffApi.patch(
            `/v1/solicitudes/${id}/atencion`,
            {
                detalle
            }
        );
    return response.data;
};
//Funciones admin
export const obtenerSolicitudesDisponibles = async()=>{
    const response =
        await bffApi.get(
            "/v1/solicitudes"
        );
    return response.data;
};

export const asignarSolicitud = async(
    id,
    operador
)=>{
    const response =
        await bffApi.patch(
            `/v1/solicitudes/${id}/asignacion`,
            {
                operador
            }
        );
    return response.data;
};

export const obtenerSolicitudesAsignadas = async()=>{
    const response =
        await bffApi.get(
            "/v1/solicitudes/asignadas"
        );
    return response.data;
};