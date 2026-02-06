import Footer from "../../shared/ui/Footer/Footer";
import Header from "../../shared/ui/Header/Header";
import {
  InputLabel,
  InputWithLabelWrapper,
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Personal information</p>
            <p>Change information</p>
          </div>
          <InputWithLabelWrapper>
            <InputLabel>Your name</InputLabel>
            <StyledInput
              placeholder="Guy Howkins"
              disableUnderline
              sx={{
                "& .MuiInputBase-input": {
                  paddingTop: "25px",
                  paddingBottom: "8px",
                },
              }}
              startAdornment={
                <StyledAdornment position="start">
                  <img src={profileIcon}></img>
                </StyledAdornment>
              }
            />
          </InputWithLabelWrapper>
          <InputWithLabelWrapper>
            <InputLabel>Your email</InputLabel>
            <StyledInput
              disableUnderline
              placeholder="somefancy@gmail.com"
              sx={{
                "& .MuiInputBase-input": {
                  paddingTop: "25px",
                  paddingBottom: "8px",
                },
              }}
              startAdornment={
                <StyledAdornment position="start">
                  <img src={profileIcon}></img>
                </StyledAdornment>
              }
            />
          </InputWithLabelWrapper>

          <InputWithLabelWrapper>
            <InputLabel>Your password</InputLabel>
            <StyledInput
              disableUnderline
              placeholder="**********************"
              sx={{
                "& .MuiInputBase-input": {
                  paddingTop: "25px",
                  paddingBottom: "8px",
                },
              }}
              startAdornment={
                <StyledAdornment position="start">
                  <img src={profileIcon}></img>
                </StyledAdornment>
              }
            />
          </InputWithLabelWrapper>
        </ProfileDataContainer>
      </UserProfileWrapper>
      <div></div>
      <Footer />
    </div>
  );
};

export default UserProfile;
