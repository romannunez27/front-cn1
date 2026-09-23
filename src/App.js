import React from "react";

import {

    AuthenticatedTemplate,

    UnauthenticatedTemplate,

    useMsal

} from "@azure/msal-react";

import MainLayout from "./components/templates/MainLayout";

import Login from "./components/templates/Login";

function App(){
    const {
        accounts
    } = useMsal();

    const usuario =
        accounts.length > 0
            ? accounts[0]
            : null;
    return (
        <>
            <UnauthenticatedTemplate>
                <Login />
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
                {
                    usuario &&
                    <MainLayout>
                        <div className="card">
                            <div className="card-body">
                                <h2>

                                    Bienvenido, {usuario.name} 👋

                                </h2>

                                <p>

                                    Tu sesión está activa mediante Microsoft Entra ID.

                                    Gestiona tus operaciones desde el menú lateral.

                                </p>
                            </div>
                        </div>
                    </MainLayout>
                }
            </AuthenticatedTemplate>
        </>
    );
}
export default App;