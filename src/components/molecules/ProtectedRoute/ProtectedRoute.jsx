import React from "react";

import {
    Navigate
} from "react-router-dom";


import useAuthUser from "../../../auth/useAuthUser";
import AccessDenied from "../../../features/common/AccessDenied";


function ProtectedRoute({

                            children,

                            allowedRoles=[]

                        }){


    const {
        roles
    } = useAuthUser();


    console.log("ROLES DEL USUARIO:", roles);


    const hasPermission = roles.some(role =>

        allowedRoles.includes(role)

    );


    console.log("ROLES REQUERIDOS:", allowedRoles);

    console.log("TIENE PERMISO:", hasPermission);



    if(!hasPermission){


        return (

            <AccessDenied />

        );


    }



    return children;


}


export default ProtectedRoute;