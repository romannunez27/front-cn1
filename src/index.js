import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import {
    PublicClientApplication
} from "@azure/msal-browser";

import {
    MsalProvider
} from "@azure/msal-react";

import {
    msalConfig
} from "./auth/authConfig";


/*
 * Creamos la instancia de MSAL
 * utilizando nuestra configuración.
 */
const msalInstance =
    new PublicClientApplication(
        msalConfig
    );


const root =
    ReactDOM.createRoot(
        document.getElementById("root")
    );


root.render(

    <BrowserRouter>

        <MsalProvider instance={msalInstance}>

            <App />

        </MsalProvider>

    </BrowserRouter>

);