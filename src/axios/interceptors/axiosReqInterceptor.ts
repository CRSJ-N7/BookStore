import { api } from "../axios";
import { tokenStorage } from "../../storage/tokenStorage";

export const axiosReqInterceptor = api.interceptors.request.use((config) => {
  const token = tokenStorage.getAccess();
  console.log(token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
