import axios from "axios";

const bffApi = axios.create({

    baseURL: "https://nhc8ghvnz3.execute-api.us-east-1.amazonaws.com"
});

export default bffApi;