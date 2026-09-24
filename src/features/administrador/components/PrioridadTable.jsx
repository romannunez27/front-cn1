import React from "react";


import Button
    from "../../../components/atoms/Button/Button";

import Badge
    from "../../../components/atoms/Badge/Badge";

function PrioridadTable({
                            prioridades=[],
                            onEditar,
                            onEliminar
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
                        Nombre
                    </th>

                    <th>
                        Descripción
                    </th>

                    <th>
                        Estado
                    </th>

                    <th>
                        Acciones
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    prioridades.map(prioridad => (
                        <tr key={prioridad.id}>
                            <td>
                                {prioridad.id}
                            </td>
                            <td>
                                {prioridad.nombre}
                            </td>
                            <td>
                                {prioridad.descripcion}
                            </td>
                            <td>
                                <Badge>

                                    {
                                        prioridad.activo
                                            ?
                                            "Activo"
                                            :
                                            "Inactivo"
                                    }
                                </Badge>
                            </td>
                            <td>
                                <Button
                                    onClick={() =>
                                        onEditar(prioridad)
                                    }
                                >
                                    Editar
                                </Button>
                                <Button
                                    variant="secondary"

                                    onClick={() =>
                                        onEliminar(prioridad.id)
                                    }
                                >
                                    Eliminar
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
export default PrioridadTable;