import axios from "axios";
import { API_URL, BASE_URL } from "../constants/app-urls";
import toast from "react-hot-toast";
import { ECommerceToken } from "../constants/auth-token";

export const apiClient = axios.create({
  baseURL: API_URL,
});

export const baseClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ECommerceToken);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject("Something went wrong on client");
  },
);

apiClient.interceptors.response.use(
  (response) => response,
  (err) => {
    const status = err.response?.status;
    const error = err.response?.data?.error;
    if (status === 401) {
      toast.error(error);
    } else if (status === 403) {
      toast.error("Forbidden");
    } else if (status === 404) {
      toast.error("Resource Not Found");
    } else if (status >= 500) {
      toast.error("Server Error");
    } else {
      toast.error(error || "Client Error");
    }
    return Promise.reject(err);
  },
);
