import MainPage from "../components/main/MainPage";
import BookProfile from "../components/book/BookProfile";
import AuthPage from "../components/auth/AuthPage";
import LogInPage from "../components/auth/log-in/LoginPage";
import SignUpPage from "../components/auth/sign-up/SingUpPage";
import ProfilePage from "../components/profile/ProfilePage";
import Favourites from "../components/favourites/Favourites";
import Cart from "../components/cart/Cart";
import Admin from "../components/admin/Admin";

import { ROUTES } from "./routes";
import PrivateRoute, { ProtectedAuthRoute } from "../routes/PrivateRoutes";

const appRoutes = [
  {
    path: ROUTES.admin.path,
    element: <Admin />,
  },
  {
    path: ROUTES.home.path,
    element: <MainPage />,
  },
  {
    path: ROUTES.bookProfile.path,
    element: <BookProfile />,
  },
  {
    path: ROUTES.auth.root,
    element: (
      <ProtectedAuthRoute>
        <AuthPage />
      </ProtectedAuthRoute>
    ),
    children: [
      {
        index: true,
        element: <LogInPage />,
      },
      {
        path: "login",
        element: <LogInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: ROUTES.favourites.path,
    element: (
      <PrivateRoute>
        <Favourites />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.profile.path,
    element: (
      <PrivateRoute>
        <ProfilePage />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.cart.path,
    element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    ),
  },
];

export default appRoutes;
