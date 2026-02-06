import Footer from "../../shared/ui/Footer/Footer";
import Header from "../../shared/ui/Input/Input";
import { MainImage } from "../main-page/Main/Main.styles";
import { AuthContainer, AuthWrapper } from "./AuthPage.styles";
import LogInPage from "./LoginPage";
import SignUpPage from "./SingUpPage";
import authImage from "../../assets/login-signup/man.png";
import { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Header />
      <AuthWrapper>
        <AuthContainer>
          {isLogin ? <LogInPage /> : <SignUpPage />}
        </AuthContainer>
        <button onClick={() => setIsLogin(!isLogin)}>CHANGE STATE</button>
        <MainImage src={authImage} />
      </AuthWrapper>
      <Footer />
    </>
  );
};

export default AuthPage;
