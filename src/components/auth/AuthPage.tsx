import { AuthContainer, AuthImage, AuthWrapper } from "./AuthPage.styles";
import authImage from "../../assets/login-signup/man.png";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <AuthWrapper>
      <AuthContainer>
        <Outlet />
      </AuthContainer>
      <AuthImage src={authImage} />
    </AuthWrapper>
  );
};

export default AuthPage;
