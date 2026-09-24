import React, {
    useEffect,
    useState
} from "react";


import CategoriaTable
    from "../components/CategoriaTable";


import PrioridadTable
    from "../components/PrioridadTable";


import CatalogForm
    from "../components/CatalogForm";

import Button
    from "../../../components/atoms/Button/Button";

import {

    obtenerCategorias,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria,

    obtenerPrioridades,
    crearPrioridad,
    actualizarPrioridad,
    eliminarPrioridad

} from "../../../services/catalogService";



function GestionCatalogo(){


    const [tipo,setTipo] = useState("categorias");



    const [categorias,setCategorias] = useState([]);



    const [prioridades,setPrioridades] = useState([]);



    const [mostrarFormulario,setMostrarFormulario] =
        useState(false);



    const [editando,setEditando] =
        useState(null);



    const [formData,setFormData] = useState({

        nombre:"",

        descripcion:"",

        activo:true

    });




    useEffect(()=>{


        cargarDatos();


    },[]);





    const cargarDatos = async()=>{


        try{


            const cat =
                await obtenerCategorias();


            const pri =
                await obtenerPrioridades();



            setCategorias(cat);

            setPrioridades(pri);



        }catch(error){


            console.error(
                "Error cargando catálogo",
                error
            );


        }


    };






    const limpiarFormulario = ()=>{


        setFormData({

            nombre:"",

            descripcion:"",

            activo:true

        });


        setEditando(null);

        setMostrarFormulario(false);


    };






    const handleChange = (event)=>{


        const {
            name,
            value,
            checked,
            type

        } = event.target;



        setFormData({

            ...formData,

            [name]:
                type === "checkbox"
                    ?
                    checked
                    :
                    value

        });


    };






    const handleSubmit = async(event)=>{


        event.preventDefault();



        try{


            if(tipo === "categorias"){


                if(editando){


                    await actualizarCategoria(

                        editando.id,

                        formData

                    );


                }else{


                    await crearCategoria(
                        formData
                    );


                }


            }else{


                if(editando){


                    await actualizarPrioridad(

                        editando.id,

                        formData

                    );


                }else{


                    await crearPrioridad(
                        formData
                    );


                }


            }



            await cargarDatos();


            limpiarFormulario();



        }catch(error){


            console.error(
                "Error guardando catálogo",
                error
            );


        }


    };






    const editar = (item)=>{


        setEditando(item);


        setFormData({

            nombre:item.nombre,

            descripcion:item.descripcion,

            activo:item.activo

        });


        setMostrarFormulario(true);


    };






    const eliminar = async(id)=>{


        try{


            if(tipo === "categorias"){


                await eliminarCategoria(id);


            }else{


                await eliminarPrioridad(id);


            }



            cargarDatos();


        }catch(error){


            console.error(
                "Error eliminando",
                error
            );


        }


    };





    return (

        <div>


            <h2 className="mb-4">

                Gestión de catálogo

            </h2>



            <ul className="nav nav-tabs mb-4">


                <li className="nav-item">


                    <button

                        className={
                            tipo === "categorias"
                                ?
                                "nav-link active"
                                :
                                "nav-link"
                        }

                        onClick={()=>setTipo("categorias")}

                    >

                        Categorías

                    </button>


                </li>



                <li className="nav-item">


                    <button

                        className={
                            tipo === "prioridades"
                                ?
                                "nav-link active"
                                :
                                "nav-link"
                        }

                        onClick={()=>setTipo("prioridades")}

                    >

                        Prioridades

                    </button>


                </li>


            </ul>





            <Button

                onClick={() =>
                    setMostrarFormulario(true)
                }

            >

                Nuevo

            </Button>




            {
                mostrarFormulario && (


                    <CatalogForm

                        titulo={
                            editando
                                ?
                                "Editar"
                                :
                                "Nuevo"
                        }

                        formData={formData}

                        onChange={handleChange}

                        onSubmit={handleSubmit}

                        onCancel={limpiarFormulario}

                    />


                )

            }





            {

                tipo === "categorias"

                    ?

                    <CategoriaTable

                        categorias={categorias}

                        onEditar={editar}

                        onEliminar={eliminar}

                    />


                    :

                    <PrioridadTable

                        prioridades={prioridades}

                        onEditar={editar}

                        onEliminar={eliminar}

                    />


            }



        </div>

    );


}


export default GestionCatalogo;