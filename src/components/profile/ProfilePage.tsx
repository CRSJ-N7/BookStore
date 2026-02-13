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
} from "./ProfilePage.styles";
import userPicture from "../../assets/profile/user.png";
import { StyledAdornment } from "../../layouts/Header/Header.styles";
import profileIcon from "../../assets/icons/profile.svg";
import { BaseParagraph } from "../../shared/styles/styles";
import photoUploader from "../../assets/profile/photoUpload.png";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { BaseButton } from "../../shared/ui/Button/Button.styles";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/authSlice";

const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div>
      <div style={{ fontSize: "55px" }}>PROFILE</div>

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
              placeholder={user?.name}
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
              placeholder={user?.email || "someemail"}
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
          <BaseButton onClick={() => logoutHandler()}>Logout</BaseButton>
        </ProfileDataContainer>
      </UserProfileWrapper>
    </div>
  );
};

export default ProfilePage;
