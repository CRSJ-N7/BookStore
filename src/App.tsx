import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./components/auth/AuthPage";
import ProfilePage from "./components/profile/ProfilePage";
import MainPage from "./components/main/MainPage";
import DefaultLayout from "./layouts/DefaultLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api } from "./axios/axios";
import { logOut, setUser } from "./store/authSlice";
import LogInPage from "./components/auth/log-in/LoginPage";
import SignUpPage from "./components/auth/sign-up/SingUpPage";

import { tokenStorage } from "./storage/tokenStorage";
import PrivateRoute from "./routes/PrivateRoutes";

const accessToken = tokenStorage.getAccess();
if (accessToken) {
  api.defaults.headers.Authorization = `Bearer ${accessToken}`;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("/users/me")
      .then((res) => {
        dispatch(setUser(res.data));
        console.log(res.data);
      })
      .catch(() => {
        dispatch(logOut());
      });
  }, []);

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />}>
            <Route index element={<LogInPage />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
