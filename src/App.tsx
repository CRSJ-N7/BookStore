import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./components/auth/AuthPage";
import UserProfile from "./components/profile/UserProfile";

import MainPage from "./pages/MainPage";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
