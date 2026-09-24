import React, {
    useEffect,
    useState
} from "react";
import {
    obtenerSolicitudesDisponibles,
    asignarSolicitud
} from "../../../services/solicitudesService";
import Button
    from "../../../components/atoms/Button/Button";

import {
    obtenerOperadores
} from "../../../services/usuariosService";

import SolicitudAsignacionTable
    from "../components/SolicitudAsignacionTable";
import OperadorSelect
    from "../components/OperadorSelect";



function AsignacionSolicitudes(){
    const [
        solicitudes,
        setSolicitudes
    ] = useState([]);

    const [
        operadores,
        setOperadores
    ] = useState([]);

    const [
        solicitudSeleccionada,
        setSolicitudSeleccionada
    ] = useState(null);

    const [
        operador,
        setOperador
    ] = useState("");

    useEffect(()=>{

        cargarDatos();

    },[]);

    const cargarDatos = async()=>{

        try {

            const solicitudes =
                await obtenerSolicitudesDisponibles();

            const operadores =
                await obtenerOperadores();

            setSolicitudes(
                solicitudes
            );

            setOperadores(
                operadores
            );

        }catch(error){

            console.error(
                "Error cargando datos",
                error
            );

        }

    };

    const seleccionarSolicitud = (solicitud)=>{

        setSolicitudSeleccionada(
            solicitud
        );

    };

    const handleAsignar = async()=>{
        if(!solicitudSeleccionada || !operador){
            return;
        }
        try {

            await asignarSolicitud(
                solicitudSeleccionada.id,
                operador
            );

            alert(
                "Solicitud asignada correctamente"
            );

            setSolicitudSeleccionada(null);

            setOperador("");

            cargarDatos();

        }catch(error){
            console.error(
                "Error asignando solicitud",
                error
            );
        }
    };





    return (

        <div>


            <h2 className="mb-4">

                Asignación de solicitudes

            </h2>



            <SolicitudAsignacionTable


                solicitudes={solicitudes}


                onAsignar={
                    seleccionarSolicitud
                }


            />



            {
                solicitudSeleccionada && (


                    <div className="card mt-4">

                        <div className="card-body">


                            <h5>

                                Solicitud seleccionada:

                            </h5>


                            <p>

                                {
                                    solicitudSeleccionada.titulo
                                }

                            </p>



                            <OperadorSelect


                                operadores={operadores}


                                value={operador}


                                onChange={
                                    e =>
                                        setOperador(
                                            e.target.value
                                        )
                                }


                            />



                            <Button
                                onClick={handleAsignar}
                            >
                                Confirmar asignación
                            </Button>


                        </div>

                    </div>


                )
            }



        </div>

    );


}


export default AsignacionSolicitudes;