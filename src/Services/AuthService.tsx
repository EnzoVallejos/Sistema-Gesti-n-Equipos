import axios, { type AxiosResponse } from "axios";
import { type UserProfileToken } from "../Models/User";

const api="https://backend-service-production-32b5.up.railway.app/api";

export type LoginRequestBody ={
    Username:string;
    Password:string;
};




export const login=async(email:string,password:string)=>{
    try{
        const response=await axios.post<UserProfileToken,AxiosResponse<UserProfileToken>,LoginRequestBody>(`${api}/Acesso/login`,{
            Username:email,
            Password:password,
        });
        console.log(response.data);
        return response.data;
    }catch(error:any){
        console.log("Error al iniciar sesión",error);
        throw error.response?.data?.message || "Error al iniciar sesión";
    }
}


