import {
    Routes,
    Route
} from "react-router-dom";
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
                path="/solicitudes"
                element={
                    <h2>
                        Solicitudes usuario
                    </h2>
                }
            />
            <Route
                path="/operador"
                element={
                    <h2>
                        Panel operador
                    </h2>
                }
            />
            <Route
                path="/admin"
                element={
                    <h2>
                        Panel administrador
                    </h2>
                }
            />
        </Routes>
    );
}
export default AppRoutes;