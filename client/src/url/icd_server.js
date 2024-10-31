import axios from 'axios';

const icd_server = axios.create({
    baseURL: "http://127.0.0.1:8000/"
});

export default icd_server;
