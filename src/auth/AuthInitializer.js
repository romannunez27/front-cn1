import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { apiRequest } from "./authConfig";
import { configurarToken } from "../services/bffApi";


function AuthInitializer({children}){


    const { instance, accounts } = useMsal();


    useEffect(()=>{


        const obtenerToken = async()=>{


            if(accounts.length === 0){
                return;
            }


            try{

                const response =
                    await instance.acquireTokenSilent({
                        ...apiRequest,
                        account: accounts[0]
                    });


                configurarToken(
                    response.accessToken
                );


                console.log(
                    "Token BFF configurado"
                );


            }catch(error){

                console.error(
                    "Error obteniendo token",
                    error
                );

            }


        };


        obtenerToken();


    },[
        accounts,
        instance
    ]);



    return children;

}


export default AuthInitializer;