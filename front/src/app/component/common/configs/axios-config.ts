import axios, { AxiosInstance } from "axios"
import { parseCookies } from 'nookies';


export default function instance() {
    const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL })
setInterceptor(instance)
return instance
}


export const setInterceptor = (inputInstance:AxiosInstance)=>{
    inputInstance.interceptors.request.use(
        (config) => {
            console.log('AXIOS-interceptors.requset : token 추출함.')

            config.headers['Content-Type'] = "application/json"
            config.headers['Authorization'] = `Bearer ${parseCookies().accessToken}`
            return config
        },
        (error) => {
            console.log('AXIOS-interceptors.use error : ' + error)
            return Promise.reject(error)
        }
    )
    inputInstance.interceptors.response.use(
        (response) => {
            if (response.status === 404) {
                console.log('AXIOS-interceptors.response : token 없어서 404 page')
            }
            return response
        }
    )
    return inputInstance

}