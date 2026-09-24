import {
    Routes,
    Route
} from "react-router-dom";

import ProtectedRoute
    from "../components/molecules/ProtectedRoute/ProtectedRoute";

import AdminHome
    from "../features/administrador/AdminHome";
import OperatorHome
    from "../features/operador/pages/OperatorHome";

import AccessDenied
    from "../features/common/AccessDenied";
//Rutas de Uuario//
import CrearSolicitud
    from "../features/solicitudes/pages/CrearSolicitud";
import MisSolicitudes
    from "../features/solicitudes/pages/MisSolicitudes";

//Rutas admin//
import AsignacionSolicitudes
    from "../features/administrador/pages/AsignacionSolicitudes";
import GestionCatalogo
    from "../features/administrador/pages/GestionCatalogo";
//Rutas operador
import SolicitudesAsignadas
    from "../features/operador/pages/SolicitudesAsignadas";
function AppRoutes(){
    return (

        <Routes>


            <Route

                path="/"

                element={

                    <h2>
                        Dashboard
                    </h2>

                }

            />
            {/* rutas usuario */}
            <Route

                path="/crear-solicitud"

                element={

                    <ProtectedRoute

                        allowedRoles={[
                            "ROLE_USER"
                        ]}
                    >

                        <CrearSolicitud />

                    </ProtectedRoute>

                }

            />
            <Route

                path="/solicitudes"

                element={

                    <ProtectedRoute

                        allowedRoles={[
                            "ROLE_USER"
                        ]}

                    >

                        <MisSolicitudes />

                    </ProtectedRoute>

                }

            />

            {/* rutas Admin */}
            <Route

                path="/catalogo"

                element={

                    <ProtectedRoute

                        allowedRoles={[
                            "ROLE_ADMIN"
                        ]}

                    >

                        <GestionCatalogo />

                    </ProtectedRoute>

                }

            />
            <Route

                path="/admin"

                element={

                    <ProtectedRoute

                        allowedRoles={[
                            "ROLE_ADMIN"
                        ]}

                    >

                        <AsignacionSolicitudes />

                    </ProtectedRoute>

                }

            />
            <Route

                path="/catalogo"

                element={

                    <ProtectedRoute

                        allowedRoles={[
                            "ROLE_ADMIN"
                        ]}

                    >

                        <GestionCatalogo />

                    </ProtectedRoute>

                }

            />


            {/* rutas Operador */}
            <Route

                path="/operador"

                element={

                    <ProtectedRoute

                        allowedRoles={[
                            "ROLE_OPERATOR"
                        ]}

                    >

                        <SolicitudesAsignadas />

                    </ProtectedRoute>

                }

            />



            <Route

                path="/denegado"

                element={

                    <AccessDenied />

                }

            />



        </Routes>

    );


}


export default AppRoutes;