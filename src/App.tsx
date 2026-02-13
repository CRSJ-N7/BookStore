import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./components/auth/AuthPage";
import ProfilePage from "./components/profile/ProfilePage";
import MainPage from "./components/main/MainPage";
import DefaultLayout from "./layouts/DefaultLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api } from "./axios/axios";
import { setUser, logout } from "./store/authSlice";
import LogInPage from "./components/auth/log-in/LoginPage";
import SignUpPage from "./components/auth/sign-up/SingUpPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("/users/me")
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch(() => {
        dispatch(logout());
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

          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
