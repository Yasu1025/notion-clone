import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:5001/api";

const getToken = () => localStorage.getItem("token");

const axiosClient = axios.create({ baseURL: BASE_URL });

// interceptor
axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const headers = new AxiosHeaders({
    "Content-Type": "application/json",
    authorization: `bearer ${getToken()}`,
  });
  return {
    ...config,
    headers,
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    throw err.response;
  }
);

export default axiosClient;
