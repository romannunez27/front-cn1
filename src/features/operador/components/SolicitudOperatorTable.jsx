import React from "react";

import Button
    from "../../../components/atoms/Button/Button";

import Badge
    from "../../../components/atoms/Badge/Badge";


import EstadoSelector
    from "./EstadoSelector";



function SolicitudOperatorTable({
                                    solicitudes=[],

                                    onCambiarEstado,

                                    onRegistrarAtencion
                                }){
    return (

        <div className="table-responsive">


            <table className="table table-hover">


                <thead>

                <tr>

                    <th>
                        ID
                    </th>

                    <th>
                        Título
                    </th>

                    <th>
                        Prioridad
                    </th>

                    <th>
                        Estado
                    </th>

                    <th>
                        Acción
                    </th>


                </tr>

                </thead>



                <tbody>


                {

                    solicitudes.map(solicitud => (


                        <tr key={solicitud.id}>


                            <td>

                                {solicitud.id}

                            </td>


                            <td>

                                {solicitud.titulo}

                            </td>


                            <td>

                                {solicitud.prioridad?.nombre}

                            </td>



                            <td>

                                <Badge>

                                    {solicitud.estado}

                                </Badge>


                            </td>
                            <td>


                                <EstadoSelector

                                    value={solicitud.estado}

                                    onChange={
                                        e =>
                                            onCambiarEstado(
                                                solicitud.id,
                                                e.target.value
                                            )
                                    }

                                />



                                <Button

                                    onClick={() =>
                                        onRegistrarAtencion(
                                            solicitud
                                        )
                                    }

                                >

                                    Registrar atención

                                </Button>


                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}
export default SolicitudOperatorTable;