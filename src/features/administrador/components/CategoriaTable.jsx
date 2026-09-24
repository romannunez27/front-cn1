import React from "react";

import Button
    from "../../../components/atoms/Button/Button";
import Badge
    from "../../../components/atoms/Badge/Badge";

function CategoriaTable({
                            categorias=[],
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

                    categorias.map(categoria => (


                        <tr key={categoria.id}>


                            <td>

                                {categoria.id}

                            </td>



                            <td>

                                {categoria.nombre}

                            </td>



                            <td>

                                {categoria.descripcion}

                            </td>



                            <td>


                                <Badge>

                                    {
                                        categoria.activo
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
                                        onEditar(categoria)
                                    }

                                >

                                    Editar

                                </Button>



                                <Button

                                    variant="secondary"

                                    onClick={() =>
                                        onEliminar(categoria.id)
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


export default CategoriaTable;