import axios from "axios";
import { tokenStorage } from "../../storage/tokenStorage";

export async function refreshToken() {
  const refreshToken = tokenStorage.getRefresh();

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
