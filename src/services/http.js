import axios from "axios";
import { AppLocalStore } from "../utils/app-local-store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const authorizedClient = axios.create();

authorizedClient.interceptors.request.use(
  (config) => {
    const token = AppLocalStore.getToken();
    token && config.headers.set("Authorization", "Bearer " + token);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const AxiosInterceptor = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const resInterceptor = (response) => response;
    const errInterceptor = (error) => {
      if (error.response?.status === 401) {
        AppLocalStore.setToken("");
      }
      return Promise.reject(error);
    };
    const interceptor = authorizedClient.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => authorizedClient.interceptors.response.eject(interceptor);
  }, [navigate]);

  return children;
};

export const Auth = {
  signIn: (data) => {
    return axios.post("/api/auth/sign_in", data);
  },
  signUp: (data) => {
    return axios.post("/api/auth/sign_up", data);
  },
  auth: () => {
    return authorizedClient.get("/api/auth/");
  },
};
