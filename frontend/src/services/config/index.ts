import axios from "axios";

const env = process.env.NODE_ENV === 'production'

export const Api = axios.create({
    baseURL: env ? process.env.NEXT_PUBLIC_BACKEND_URL : 'http://localhost:3001'
})
