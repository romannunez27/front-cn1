import React from "react";


import Badge from "../../../components/atoms/Badge/Badge";



function SolicitudTable({

                            solicitudes=[]

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
                        Categoría
                    </th>

                    <th>
                        Prioridad
                    </th>

                    <th>
                        Estado
                    </th>

                    <th>
                        Fecha
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

                                {solicitud.categoria?.nombre}

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

                                {solicitud.fechaCreacion}

                            </td>



                        </tr>


                    ))


                }



                </tbody>


            </table>


        </div>

    );


}


export default SolicitudTable;