import React from "react";

import {
    useMsal
} from "@azure/msal-react";

import "./UserProfile.css";


function UserProfile(){

    const {
        instance
    } = useMsal();


    const accounts =
        instance.getAllAccounts();


    const account =
        accounts[0];


    const claims =
        account?.idTokenClaims;



    if(!account){

        return (

            <div className="user-profile-card">

                No hay usuario autenticado

            </div>

        );

    }


    return (

        <div className="user-profile-card">

            <h5>
                Usuario autenticado
            </h5>


            <p>
                <strong>
                    Nombre:
                </strong>
                {" "}
                {claims?.name}
            </p>


            <p>
                <strong>
                    Usuario:
                </strong>
                {" "}
                {claims?.preferred_username}
            </p>


            <p>
                <strong>
                    Object ID:
                </strong>
                {" "}
                {claims?.oid}
            </p>


            <p>
                <strong>
                    Roles:
                </strong>
                {" "}
                {
                    claims?.roles?.join(", ")
                }
            </p>


        </div>

    );

}


export default UserProfile;