import React from "react";

import Badge
    from "../../../components/atoms/Badge/Badge";

import Button
    from "../../../components/atoms/Button/Button";


function SolicitudAsignacionTable({
    solicitudes = [],
    onAsignar
}) {

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
                        Usuario
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

                                {
                                    solicitud.usuario?.nombre
                                    ||
                                    solicitud.usuario?.correo
                                    ||
                                    "Sin usuario"
                                }

                            </td>


                            <td>

                                {
                                    solicitud.prioridad?.nombre
                                    ||
                                    "Sin prioridad"
                                }

                            </td>


                            <td>

                                <Badge>
                                    {solicitud.estado}
                                </Badge>

                            </td>


                            <td>

                                <Button
                                    onClick={() =>
                                        onAsignar(solicitud)
                                    }
                                >
                                    Asignar
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


export default SolicitudAsignacionTable;