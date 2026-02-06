import InfoContainer from "../../../shared/ui/Info/InfoContainer";
import authImage from "../../../assets/main-page/login/login.png";
import {
  AuthImage,
  AuthWrapper,
  BackgroundImage,
  InfoWrapper,
} from "./Auth.style";
import winksImage from "../../../assets/main-page/login/winks.png";

const Auth = () => {
  const header = "Autorize now";
  const paragraph = "Autorize now and discover faboulous world of books";
  const buttonText = "Log in / Sign up";

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
        />
      </InfoWrapper>
      <BackgroundImage src={winksImage}></BackgroundImage>
    </AuthWrapper>
  );
};

export default Auth;
