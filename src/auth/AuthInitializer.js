import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";


function AuthInitializer({children}){


    const {
        instance,
        accounts
    } = useMsal();



    useEffect(()=>{


        const validarSesion = async()=>{


            if(accounts.length === 0){
                return;
            }


            try{


                await instance.acquireTokenSilent({

                    account: accounts[0],

                    scopes:[
                        "api://33b8186d-805f-4136-8209-4af63d8f7388/access_as_user"
                    ]

                });


            }catch(error){

                console.error(
                    "Error validando token",
                    error
                );

            }


        };


        validarSesion();


    },[
        accounts,
        instance
    ]);



    return children;

}


export default AuthInitializer;