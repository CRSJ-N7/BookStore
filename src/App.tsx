import "./App.css";
import AuthPage from "./components/auth/AuthPage";
import UserProfile from "./components/profile/UserProfile";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <MainPage />
      <AuthPage />
      <UserProfile />
    </>
  );
}

export default App;
