import bffApi from "./bffApi";

export const obtenerCategorias = async()=>{

    const response =
        await bffApi.get(
            "/v1/catalogo/categorias"
        );

    return response.data;
};
export const crearCategoria = async(data)=>{

    const response =
        await bffApi.post(
            "/v1/catalogo/categorias",
            data
        );

    return response.data;

};

export const actualizarCategoria = async(id,data)=>{

    const response =
        await bffApi.put(
            `/v1/catalogo/categorias/${id}`,
            data
        );
    return response.data;
};

export const eliminarCategoria = async(id)=>{

    await bffApi.delete(
        `/v1/catalogo/categorias/${id}`
    );
};

export const obtenerPrioridades = async()=>{

    const response =
        await bffApi.get(
            "/v1/catalogo/prioridades"
        );

    return response.data;
};

export const crearPrioridad = async(data)=>{

    const response =
        await bffApi.post(
            "/v1/catalogo/prioridades",
            data
        );
    return response.data;
};

export const actualizarPrioridad = async(id,data)=>{

    const response =
        await bffApi.put(
            `/v1/catalogo/prioridades/${id}`,
            data
        );
    return response.data;
};

export const eliminarPrioridad = async(id)=>{

    await bffApi.delete(
        `/v1/catalogo/prioridades/${id}`
    );
};
export const obtenerCatalogoV2 = async()=>{


    const response =
        await bffApi.get(
            "/v2/catalogo"
        );


    return response.data;


};