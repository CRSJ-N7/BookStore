import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./components/auth/AuthPage";
import ProfilePage from "./components/profile/ProfilePage";
import MainPage from "./components/main/MainPage";
import DefaultLayout from "./layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/authSlice";
import LogInPage from "./components/auth/log-in/LoginPage";
import SignUpPage from "./components/auth/sign-up/SingUpPage";
import { tokenStorage } from "./storage/tokenStorage";
import PrivateRoute, { ProtectedAuthRoute } from "./routes/PrivateRoutes";
import authApi from "./api/authApi";
import Admin from "./components/admin/Admin";
import { GlobalContainer, Loader } from "./App.styles";
import BookProfile from "./components/book/BookProfile";
import Cart from "./components/cart/Cart";
import Favourites from "./components/favourites/Favourites";
import PerfectLoader from "./assets/loader/perfect-loader.jpg";

function App() {
  const dispatch = useDispatch();
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    authApi
      .getMe()
      .then((data) => dispatch(setUser(data)))
      .catch(() => tokenStorage.clearAccess())
      .finally(() => setTimeout(() => setLoadingUser(false), 300));
  }, [dispatch]);

  if (loadingUser) {
    return (
      <Loader>
        <p> LOADING BLYAT</p>
        <img src={PerfectLoader} />
      </Loader>
    );
  }

  return (
    <GlobalContainer>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/books/:id" element={<BookProfile />} />

          <Route
            path="/auth"
            element={
              <ProtectedAuthRoute>
                <AuthPage />
              </ProtectedAuthRoute>
            }
          >
            <Route index element={<LogInPage />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>
          <Route
            path="/favourites"
            element={
              <PrivateRoute>
                <Favourites />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </GlobalContainer>
  );
}

export default App;
