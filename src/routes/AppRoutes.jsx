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