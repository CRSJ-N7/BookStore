import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import { useEffect } from "react";
import { GlobalContainer, Loader } from "./App.styles";
import PerfectLoader from "./assets/loader/perfect-loader.jpg";
import appRoutes from "./routes/appRoutes";
import { getMeThunk } from "./store/authThunks";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

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

  console.log("App render, location:", window.location.pathname);

  return (
    <GlobalContainer>
      <Routes>
        <Route element={<DefaultLayout />}>
          {appRoutes.map((route, index) => (
            <Route key={index} {...route}>
              {route.children &&
                route.children.map((child, i) => <Route key={i} {...child} />)}
            </Route>
          ))}
        </Route>
      </Routes>
    </GlobalContainer>
  );
}

export default App;
