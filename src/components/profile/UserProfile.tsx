import Footer from "../../shared/ui/Footer/Footer";
import Header from "../../shared/ui/Header/Header";
import {
  ProfileDataContainer,
  ProfilePicture,
  UserProfileWrapper,
} from "./UserProfile.styles";
import userPicture from "../../assets/profile/user.png";
import {
  StyledInput,
  StyledAdornment,
} from "../../shared/ui/Header/Header.styles";
import profileIcon from "../../assets/icons/profile.svg";

const UserProfile = () => {
  return (
    <div>
      <div style={{ fontSize: "55px" }}>PROFILE</div>

      <Header />
      <UserProfileWrapper>
        <ProfilePicture src={userPicture} />
        <ProfileDataContainer>
          <StyledInput
            placeholder="Your name"
            disableUnderline
            startAdornment={
              <StyledAdornment position="start">
                <img src={profileIcon}></img>
              </StyledAdornment>
            }
          />
          <StyledInput
            placeholder="Your email"
            disableUnderline
            startAdornment={
              <StyledAdornment position="start">
                <img src={profileIcon}></img>
              </StyledAdornment>
            }
            endAdornment={
              <StyledAdornment position="start">
                <img src={profileIcon}></img>
              </StyledAdornment>
            }
          />
          <StyledInput
            placeholder="Email"
            disableUnderline
            startAdornment={
              <StyledAdornment position="start">
                <img src={profileIcon}></img>
              </StyledAdornment>
            }
          />
        </ProfileDataContainer>
      </UserProfileWrapper>
      <div></div>
      <Footer />
    </div>
  );
};

export default UserProfile;
