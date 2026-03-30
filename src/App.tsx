import "./App.css";
import { useEffect } from "react";
import { GlobalContainer, Loader } from "./App.styles";
import PerfectLoader from "./assets/loader/perfect-loader.jpg";
import { getMeThunk } from "./store/authThunks";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useAppDispatch();
  const loadingUser = useAppSelector((state) => state.auth.loading);

  useEffect(() => {
    dispatch(getMeThunk());
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
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <Outlet />
    </GlobalContainer>
  );
}

export default App;
