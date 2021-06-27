import axios, {AxiosRequestConfig} from "axios";
import AuthenticationContext from "../Authentication/AuthenticationContext";
import {useContext} from "react";

const instance = axios.create();

export const useAxios = () => {

    const authentication = useContext(AuthenticationContext)

    const setAuthorizationHeader = (config: AxiosRequestConfig): AxiosRequestConfig => {
        if (authentication.accessToken) config.headers["Authorization"] = `Bearer ${authentication.accessToken}`
        return config;
    }

    instance.interceptors.request.use(setAuthorizationHeader)
}

export default instance
