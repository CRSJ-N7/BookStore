export const tokenStorage = {
  getAccess: () => localStorage.getItem("accessToken"),
  setAccess: (token: string) => localStorage.setItem("accessToken", token),

  getRefresh: () => localStorage.getItem("refreshToken"),
  setRefresh: (token: string) => localStorage.setItem("refreshToken", token),

  clear: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
};
