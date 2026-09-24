import React from "react";

import {
    useMsal
} from "@azure/msal-react";


function UserInfo(){
    const {
        instance
    } = useMsal();
    const account =
        instance.getActiveAccount();
    const claims =
        account?.idTokenClaims;
    if(!account){
        return null;
    }
    return (
        <div className="card mt-4">
            <div className="card-body">
                <h5>
                    Información del usuario autenticado
                </h5>
                <hr/>
                <p>
                    <strong>
                        Nombre:
                    </strong>
                    {" "}
                    {
                        claims?.name
                    }
                </p>
                <p>
                    <strong>
                        Usuario:
                    </strong>
                    {" "}
                    {
                        claims?.preferred_username
                    }
                </p>
                <p>
                    <strong>
                        ID Usuario (oid):
                    </strong>
                    {" "}
                    {
                        claims?.oid
                    }
                </p>
                <p>
                    <strong>
                        Tenant:
                    </strong>
                    {" "}
                    {
                        claims?.tid
                    }
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
        </div>
    );
}
export default UserInfo;