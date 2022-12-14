import axios from 'axios'

const BASE_url = "http://localhost:5000/api"

export const publicRequest = axios.create({
    baseURL : BASE_url,
    headers : {
        "content-type" : "application/json"
    }
})
