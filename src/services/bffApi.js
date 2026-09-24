import axios from "axios";


const bffApi = axios.create({

    baseURL:"http://localhost:8080"

});


export default bffApi;