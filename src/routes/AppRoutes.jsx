import {
    Routes,
    Route
} from "react-router-dom";


import ProtectedRoute
    from "../components/molecules/ProtectedRoute/ProtectedRoute";


import AdminHome
    from "../features/administrador/AdminHome";


import OperatorHome
    from "../features/operador/OperatorHome";


import AccessDenied
    from "../features/common/AccessDenied";
//Rutas de Uuario//
import CrearSolicitud
    from "../features/solicitudes/pages/CrearSolicitud";
import MisSolicitudes
    from "../features/solicitudes/pages/MisSolicitudes";
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

                path="/admin"

                element={

                    <ProtectedRoute

                        allowedRoles={[
                            "ROLE_ADMIN"
                        ]}

                    >

                        <AdminHome />

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

                        <OperatorHome />

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