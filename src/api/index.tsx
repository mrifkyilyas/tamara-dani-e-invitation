import axios from 'axios';
import { API_SERVER } from "../config/constant";

const instanceAxios = axios.create({
  baseURL: `${API_SERVER}`,
  headers: { "Content-Type": "application/json" },
});

instanceAxios.interceptors.request.use(
  (config: any) => {
    return Promise.resolve(config);
  },
  (error: any) => Promise.reject(error)
);

instanceAxios.interceptors.response.use(
  (response: any) => Promise.resolve(response),
  (error: any) => {
    return Promise.reject(error);
  }
);

export default instanceAxios;
