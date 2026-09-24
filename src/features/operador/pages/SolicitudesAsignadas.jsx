import React, {
    useEffect,
    useState
} from "react";


import SolicitudOperatorTable
    from "../components/SolicitudOperatorTable";


import AtencionForm
    from "../components/AtencionForm";


import {
    obtenerSolicitudesAsignadas,
    actualizarEstadoSolicitud,
    registrarAtencion
} from "../../../services/solicitudesService";



function SolicitudesAsignadas(){


    const [
        solicitudSeleccionada,
        setSolicitudSeleccionada
    ] = useState(null);



    const [
        detalle,
        setDetalle
    ] = useState("");



    const [
        solicitudes,
        setSolicitudes
    ] = useState([]);



    const [
        loading,
        setLoading
    ] = useState(true);




    useEffect(()=>{

        cargarSolicitudes();

    },[]);




    const cargarSolicitudes = async()=>{


        try{


            const data =
                await obtenerSolicitudesAsignadas();


            setSolicitudes(data);



        }catch(error){


            console.error(
                "Error cargando solicitudes asignadas",
                error
            );


        }finally{


            setLoading(false);


        }


    };




    const cambiarEstado = async(
        id,
        estado
    )=>{


        try{


            await actualizarEstadoSolicitud(
                id,
                estado
            );


            cargarSolicitudes();



        }catch(error){


            console.error(
                "Error cambiando estado",
                error
            );


        }


    };




    const guardarAtencion = async(event)=>{


        event.preventDefault();



        try{


            await registrarAtencion(

                solicitudSeleccionada.id,

                detalle

            );


            setSolicitudSeleccionada(null);

            setDetalle("");

            cargarSolicitudes();



        }catch(error){


            console.error(
                "Error registrando atención",
                error
            );


        }


    };




    if(loading){


        return (

            <div className="text-center mt-5">


                <div

                    className="spinner-border"

                />


                <p>

                    Cargando solicitudes...

                </p>


            </div>

        );


    }




    return (

        <div>


            <h2 className="mb-4">

                Solicitudes asignadas

            </h2>



            <SolicitudOperatorTable

                solicitudes={solicitudes}

                onCambiarEstado={
                    cambiarEstado
                }

                onRegistrarAtencion={
                    setSolicitudSeleccionada
                }

            />



            {
                solicitudSeleccionada && (

                    <div className="card mt-4">

                        <div className="card-body">


                            <h5>

                                Registrar atención

                            </h5>



                            <AtencionForm

                                detalle={detalle}

                                onChange={
                                    e =>
                                        setDetalle(
                                            e.target.value
                                        )
                                }

                                onSubmit={
                                    guardarAtencion
                                }

                                onCancel={()=>{

                                    setSolicitudSeleccionada(null);

                                    setDetalle("");

                                }}

                            />


                        </div>

                    </div>

                )
            }


        </div>

    );


}


export default SolicitudesAsignadas;