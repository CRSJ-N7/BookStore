import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

import MainPage from "../components/main/MainPage";
import BookProfile from "../components/book/BookProfile";
import AuthPage from "../components/auth/AuthPage";
import LogInPage from "../components/auth/log-in/LoginPage";
import SignUpPage from "../components/auth/sign-up/SingUpPage";
import ProfilePage from "../components/profile/ProfilePage";
import Favourites from "../components/favourites/Favourites";
import Cart from "../components/cart/Cart";
import Admin from "../components/admin/Admin";

import PrivateRoute, { ProtectedAuthRoute } from "./PrivateRoutes";
import { ROUTES } from "./routes";

import App from "../App";
import { TestPage } from "../components/test/TestPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
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
              { index: true, element: <LogInPage /> },
              { path: "login", element: <LogInPage /> },
              { path: "signup", element: <SignUpPage /> },
            ],
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
            path: ROUTES.favourites.path,
            element: (
              <PrivateRoute>
                <Favourites />
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
          {
            path: ROUTES.admin.path,
            element: <Admin />,
          },
          {
            path: ROUTES.test.path,
            element: <TestPage />,
          },
        ],
      },
    ],
  },
]);
