import React, {
    useEffect,
    useState
} from "react";


import SolicitudTable
    from "../components/SolicitudTable";


import {
    obtenerMisSolicitudes
} from "../../../services/solicitudesService";



function MisSolicitudes(){


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
                await obtenerMisSolicitudes();


            setSolicitudes(data);



        }catch(error){


            console.error(
                "Error cargando solicitudes",
                error
            );


        }finally{


            setLoading(false);


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

                Mis solicitudes

            </h2>



            <SolicitudTable

                solicitudes={solicitudes}

            />


        </div>

    );


}


export default MisSolicitudes;