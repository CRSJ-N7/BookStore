import { api } from "../axios";
import { tokenStorage } from "../../storage/tokenStorage";

export const axiosReq = api.interceptors.request.use((config) => {
  const token = tokenStorage.getAccess();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
