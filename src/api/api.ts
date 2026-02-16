import axios from "axios";
import { tokenStorage } from "../storage/tokenStorage";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
});

async function refreshToken() {
  const refreshToken = tokenStorage.getRefresh();

  console.log("МЫ ЗАШЛИ В REFRESH");

  if (!refreshToken) {
    throw new Error("No refresh token");
  }

  const response = await axios.post("http://localhost:3000/users/refresh", {
    refreshToken,
  });

  const newAccessToken = response.data.accessToken;

  tokenStorage.setAccess(newAccessToken);

  return newAccessToken;
}

api.interceptors.response.use(undefined, async (error) => {
  const originalRequest = error.config;
  console.log("зашли в get interceptor");
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
});

api.interceptors.request.use((config) => {
  const token = tokenStorage.getAccess();
  console.log(token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
