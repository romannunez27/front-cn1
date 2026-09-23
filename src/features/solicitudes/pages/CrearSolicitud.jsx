import React, {
    useEffect,
    useState
} from "react";


import SolicitudForm
    from "../components/SolicitudForm";


import {
    obtenerCatalogo
} from "../../../services/catalogService";


import {
    crearSolicitud
} from "../../../services/solicitudesService";



function CrearSolicitud(){


    const [catalogo,setCatalogo] = useState({

        categorias:[],

        prioridades:[]

    });



    const [loading,setLoading] = useState(true);



    const [formData,setFormData] = useState({

        titulo:"",

        descripcion:"",

        categoriaId:"",

        prioridadId:""

    });



    useEffect(()=>{


        cargarCatalogo();


    },[]);




    const cargarCatalogo = async()=>{


        try {


            const data =
                await obtenerCatalogo();


            setCatalogo(data);



        }catch(error){


            console.error(
                "Error cargando catálogo",
                error
            );


        }finally{


            setLoading(false);


        }


    };





    const handleChange = (event)=>{


        const {
            name,
            value
        } = event.target;



        setFormData({

            ...formData,

            [name]:value

        });


    };






    const limpiarFormulario = ()=>{


        setFormData({

            titulo:"",

            descripcion:"",

            categoriaId:"",

            prioridadId:""

        });


    };






    const handleSubmit = async(event)=>{


        event.preventDefault();



        try {


            await crearSolicitud(formData);



            alert(
                "Solicitud creada correctamente"
            );



            limpiarFormulario();



        }catch(error){


            console.error(
                "Error creando solicitud",
                error
            );


        }


    };





    if(loading){


        return (

            <div className="text-center mt-5">


                <div
                    className="spinner-border"
                    role="status"
                />


                <p className="mt-3">

                    Cargando información...

                </p>


            </div>

        );


    }







    return (

        <div>


            <SolicitudForm


                formData={formData}


                onChange={handleChange}


                onSubmit={handleSubmit}



                categorias={

                    catalogo.categorias.filter(

                        item => item.activo

                    )

                }



                prioridades={

                    catalogo.prioridades.filter(

                        item => item.activo

                    )

                }


            />


        </div>

    );


}


export default CrearSolicitud;