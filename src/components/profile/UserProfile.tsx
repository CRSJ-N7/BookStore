import Footer from "../../shared/ui/Footer/Footer";
import Header from "../../shared/ui/Input/Input";
import {
  ChangeParagraph,
  InputLabel,
  InputWithLabelWrapper,
  PhotoUploader,
  PhotoWrapper,
  ProfileDataContainer,
  ProfileInput,
  ProfilePicture,
  UserProfileWrapper,
} from "./UserProfile.styles";
import userPicture from "../../assets/profile/user.png";
import { StyledAdornment } from "../../shared/ui/Input/Input.styles";
import profileIcon from "../../assets/icons/profile.svg";
import { BaseParagraph } from "../../shared/styles/styles";
import photoUploader from "../../assets/profile/photoUpload.png";

const UserProfile = () => {
  return (
    <div>
      <div style={{ fontSize: "55px" }}>PROFILE</div>

      <Header />
      <UserProfileWrapper>
        <PhotoWrapper>
          <ProfilePicture src={userPicture} />
          <PhotoUploader src={photoUploader} />
        </PhotoWrapper>
        <ProfileDataContainer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <BaseParagraph>Personal information</BaseParagraph>
            <ChangeParagraph>Change information</ChangeParagraph>
          </div>
          <InputWithLabelWrapper>
            <InputLabel>Your name</InputLabel>
            <ProfileInput
              placeholder="Guy Howkins"
              disableUnderline
              disabled
              style={{ cursor: "not-allowed" }}
              sx={{
                "& .MuiInputBase-input": {
                  paddingTop: "25px",
                  paddingBottom: "8px",
                  cursor: "not-allowed",
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
            <ProfileInput
              disableUnderline
              disabled
              placeholder="somefancy@gmail.com"
              sx={{
                "& .MuiInputBase-input": {
                  paddingTop: "25px",
                  paddingBottom: "8px",
                  cursor: "not-allowed",
                },
              }}
              startAdornment={
                <StyledAdornment position="start">
                  <img src={profileIcon}></img>
                </StyledAdornment>
              }
            />
          </InputWithLabelWrapper>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <BaseParagraph>Password</BaseParagraph>
            <ChangeParagraph>Change password</ChangeParagraph>
          </div>
          <InputWithLabelWrapper>
            <InputLabel>Change password</InputLabel>
            <ProfileInput
              disableUnderline
              disabled
              placeholder="**********************"
              sx={{
                "& .MuiInputBase-input": {
                  paddingTop: "25px",
                  paddingBottom: "8px",
                  cursor: "not-allowed",
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
