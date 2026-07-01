import { Routes } from "../constants/app-routes"
import { apiClient } from "../lib/axios"

export const login=async (model)=>{
    return (await apiClient.post(Routes.auth.login,model)).data;
}

export const signUp=async(model)=>{
     return (await apiClient.post(Routes.auth.signUp,model)).data;
}

export const changePassword=async(model)=>{
    return (await apiClient.post(Routes.auth.changePassword,model)).data;
}