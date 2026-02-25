import InfoContainer from "../../../shared/ui/Info/InfoContainer";
import authImage from "../../../assets/main-page/login/login.png";
import {
  AuthImage,
  AuthWrapper,
  BackgroundImage,
  InfoWrapper,
} from "./AuthBanner.styles";
import winksImage from "../../../assets/main-page/login/winks.png";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";

const AuthBanner = () => {
  const header = "Autorize now";
  const paragraph = "Autorize now and discover faboulous world of books";
  const buttonText = "Log in / Sign up";
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/auth/login");
  };
  if (!user) {
    return (
      <AuthWrapper>
        <AuthImage src={authImage} />
        <InfoWrapper>
          <InfoContainer
            paragraph={paragraph}
            header={header}
            buttonText={buttonText}
            buttonProps={{
              variant: "contained",
              style: { marginTop: "50px", zIndex: 2 },
            }}
            onButtonClick={clickHandler}
          />
        </InfoWrapper>
        <BackgroundImage src={winksImage}></BackgroundImage>
      </AuthWrapper>
    );
  }
};

export default AuthBanner;
