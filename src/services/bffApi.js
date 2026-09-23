import axios from "axios";


const BFF_URL = "http://localhost:8080";


const bffApi = axios.create({

    baseURL:BFF_URL

});


export const configurarToken = (accessToken)=>{


    bffApi.defaults.headers.common.Authorization =
        `Bearer ${accessToken}`;


};


export default bffApi;