import { MainImage } from "../main-page/Main/Main.styles";
import { AuthContainer, AuthWrapper } from "./AuthPage.styles";
import LogInPage from "./log-in/LoginPage";
import SignUpPage from "./sign-up/SingUpPage";
import authImage from "../../assets/login-signup/man.png";
import { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <AuthWrapper>
        <AuthContainer>
          {isLogin ? <LogInPage /> : <SignUpPage />}
        </AuthContainer>
        <button onClick={() => setIsLogin(!isLogin)}>CHANGE STATE</button>
        <MainImage src={authImage} />
      </AuthWrapper>
    </>
  );
};

export default AuthPage;
