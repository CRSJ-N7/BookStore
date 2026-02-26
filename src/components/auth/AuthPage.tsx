import { MainImage } from "../main/MainBanner/MainBanner.styles";
import { AuthContainer, AuthWrapper } from "./AuthPage.styles";
import authImage from "../../assets/login-signup/man.png";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <AuthWrapper>
      <AuthContainer>
        <Outlet />
      </AuthContainer>
      <MainImage src={authImage} />
    </AuthWrapper>
  );
};

export default AuthPage;
