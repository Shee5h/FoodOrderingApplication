import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/institutions";

const saveInstitution = ({ codeName, businessName, address }) => {
    return axios
        .post(API_URL, {
            codeName,
            businessName,
            address,
        }, { headers: authHeader() });
}

const getAllInstitutions = () => {
    return axios
        .get(API_URL, { headers: authHeader() })
}

export default {
    saveInstitution,
    getAllInstitutions
}