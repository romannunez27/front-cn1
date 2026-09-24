import React,{useEffect, useState} from "react";
import {
    obtenerCatalogoV2
} from "../../../services/catalogService";
function CatalogoVersiones(){
    const [
        catalogo,
        setCatalogo
    ] = useState(null);
    useEffect(()=>{
        cargar();
    },[]);
    const cargar = async()=>{
        const data =
            await obtenerCatalogoV2();
        setCatalogo(data);
    };
    return (
        <div>
            <h2>
                Catálogo V2
            </h2>
            {
                catalogo && (

                    <div className="card">

                        <div className="card-body">


                            <h5>
                                Información de versión
                            </h5>


                            <p>
                                Versión:
                                {" "}
                                {catalogo.version}
                            </p>


                            <p>
                                Total categorías:
                                {" "}
                                {catalogo.totalCategorias}
                            </p>


                            <p>
                                Total prioridades:
                                {" "}
                                {catalogo.totalPrioridades}
                            </p>


                            <p>
                                Generado:
                                {" "}
                                {catalogo.generadoEn}
                            </p>



                            <hr/>


                            <h5>
                                Categorías
                            </h5>


                            <table className="table table-hover">

                                <thead>

                                <tr>

                                    <th>ID</th>
                                    <th>Nombre</th>

                                </tr>

                                </thead>


                                <tbody>

                                {
                                    catalogo.categorias?.map(
                                        categoria => (

                                            <tr
                                                key={categoria.id}
                                            >

                                                <td>
                                                    {categoria.id}
                                                </td>


                                                <td>
                                                    {categoria.nombre}
                                                </td>


                                            </tr>

                                        )
                                    )
                                }

                                </tbody>

                            </table>



                            <h5 className="mt-4">
                                Prioridades
                            </h5>


                            <table className="table table-hover">

                                <thead>

                                <tr>

                                    <th>ID</th>
                                    <th>Nombre</th>

                                </tr>

                                </thead>


                                <tbody>

                                {
                                    catalogo.prioridades?.map(
                                        prioridad => (

                                            <tr
                                                key={prioridad.id}
                                            >

                                                <td>
                                                    {prioridad.id}
                                                </td>


                                                <td>
                                                    {prioridad.nombre}
                                                </td>


                                            </tr>

                                        )
                                    )
                                }

                                </tbody>

                            </table>



                        </div>

                    </div>

                )
            }
        </div>
    );
}
export default CatalogoVersiones;