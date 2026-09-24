import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { apiRequest } from "../auth/authConfig";
import bffApi from "./bffApi";
import { PublicClientApplication } from "@azure/msal-browser";


export const configurarInterceptor = (instance)=>{


    bffApi.interceptors.request.use(

        async(config)=>{


            const accounts =
                instance.getAllAccounts();


            if(accounts.length > 0){

                try{

                    const response =
                        await instance.acquireTokenSilent({

                            ...apiRequest,

                            account: accounts[0]

                        });


                    config.headers.Authorization =
                        `Bearer ${response.accessToken}`;


                }catch(error){


                    if(error instanceof InteractionRequiredAuthError){

                        await instance.acquireTokenRedirect(
                            apiRequest
                        );

                    }

                }

            }


            return config;

        }

    );

};