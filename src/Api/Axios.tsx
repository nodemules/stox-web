import axios, {AxiosRequestConfig} from "axios";
import {useAuthentication} from "../Authentication/AuthenticationContext";

const instance = axios.create();

export const useAxios = () => {

    const authentication = useAuthentication();

    const setAuthorizationHeader = (config: AxiosRequestConfig): AxiosRequestConfig => {
        if (authentication.accessToken) config.headers["Authorization"] = `Bearer ${authentication.accessToken}`
        return config;
    }

    instance.interceptors.request.use(setAuthorizationHeader)
}

export default instance
