import React from "react";
import AppRoutes from "./routes/AppRoutes";
import {

    AuthenticatedTemplate,

    UnauthenticatedTemplate,

    useMsal

} from "@azure/msal-react";

import MainLayout from "./components/templates/MainLayout";

import Login from "./components/templates/Login";

import AuthInitializer from "./auth/AuthInitializer";

function App(){

    const {
        accounts
    } = useMsal();


    const usuario =
        accounts.length > 0
            ? accounts[0]
            : null;


    return (

        <AuthInitializer>

            <UnauthenticatedTemplate>
                <Login />
            </UnauthenticatedTemplate>


            <AuthenticatedTemplate>

                {
                    usuario &&
                    <MainLayout>

                        <AppRoutes />

                    </MainLayout>
                }

            </AuthenticatedTemplate>


        </AuthInitializer>

    );

}
export default App;