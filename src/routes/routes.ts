export const ROUTES = {
  home: {
    path: "/",
  },

  bookProfile: {
    path: "/books/:id",
    getUrl: (id: string | number) => `/books/${id}`,
  },

  auth: {
    root: "/auth",
    login: "/auth/login",
    signup: "/auth/signup",
  },

  profile: {
    path: "/profile",
  },

  favourites: {
    path: "/favourites",
  },

  cart: {
    path: "/cart",
  },

  admin: {
    path: "/admin",
  },
};
