import React from "react";

import {
    useMsal
} from "@azure/msal-react";

import {
    loginRequest
} from "../../auth/authConfig";


function Login(){

    const { instance } = useMsal();

    const iniciarSesion = () => {

        instance
            .loginRedirect(loginRequest)
            .catch(error => {

                console.error(
                    "Error login:",
                    error
                );
            });
    };

    return (

        <div className="container vh-100 d-flex justify-content-center align-items-center">

            <div className="card shadow p-5 text-center">

                <h1 className="mb-3">
                    MesaTech Cloud
                </h1>

                <p className="text-muted">
                    Inicia sesión con tu cuenta institucional
                </p>

                <button
                    className="btn btn-primary"
                    onClick={iniciarSesion}
                >
                    Continuar con Microsoft
                </button>
            </div>

        </div>
    );
}
export default Login;