import axios from "axios"
const API_URL="https://backend-service-production-32b5.up.railway.app/api";

export default axios.create({

    baseURL:API_URL
})
