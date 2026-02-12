import { tokenStorage } from "../../storage/tokenStorage";
import { api } from "../axios";
import { refreshToken } from "./refreshToken";

export const axiosResInterceptor = api.interceptors.response.use(
  undefined,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest.retries) {
      originalRequest.retries = true;
      try {
        await refreshToken();
        return api(originalRequest);
      } catch (error) {
        tokenStorage.clear();
        throw error;
      }
    }

    throw error;
  },
);
