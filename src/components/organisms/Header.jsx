import React from "react";

import {
    useMsal
} from "@azure/msal-react";
function Header(){
    const {
        instance
    } = useMsal();
    const cerrarSesion = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri:
            window.location.origin
        });
    };
    return (
        <header className="navbar navbar-light bg-white border-bottom px-4">
            <span className="navbar-brand">
                Panel MesaTech Cloud
            </span>
            <button
                className="btn btn-outline-danger"
                onClick={cerrarSesion}
            >
                Cerrar sesión
            </button>
        </header>
    );
}
export default Header;