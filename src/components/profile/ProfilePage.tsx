import {
  ChangeParagraph,
  FloatingLabel,
  PhotoUploader,
  PhotoWrapper,
  ProfileDataContainer,
  ProfilePicture,
  UserProfileWrapper,
} from "./ProfilePage.styles";
import userPicture from "../../assets/profile/user.png";
import profileIcon from "../../assets/icons/profile.svg";
import emailIcon from "../../assets/icons/mail.svg";
import hideIcon from "../../assets/icons/hide.svg";
import {
  BaseHeader,
  InputWrapper,
  StyledAdornment,
  StyledInput,
} from "../../shared/styles/styles";
import photoUploader from "../../assets/profile/photoUpload.png";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { BaseButton } from "../../shared/ui/Button/Button.styles";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/authSlice";
import { useState } from "react";

const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);

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
          <div style={{ display: "flex" }}>
            <BaseHeader fontSize="20px">Personal information</BaseHeader>
            <ChangeParagraph onClick={() => setIsEditProfile((prev) => !prev)}>
              {isEditProfile ? "Accept" : "Change information"}
            </ChangeParagraph>
          </div>
          <InputWrapper>
            <FloatingLabel>Your name</FloatingLabel>
            <StyledAdornment>
              <img src={profileIcon}></img>
            </StyledAdornment>

            <StyledInput
              name="name"
              disabled={!isEditProfile}
              type="input"
              placeholder=""
              defaultValue={user?.name}
            ></StyledInput>
          </InputWrapper>
          <InputWrapper>
            <FloatingLabel>Your email</FloatingLabel>
            <StyledAdornment>
              <img src={emailIcon}></img>
            </StyledAdornment>
            <StyledInput
              name="email"
              disabled={!isEditProfile}
              type="input"
              placeholder=""
              defaultValue={user?.email}
            ></StyledInput>
          </InputWrapper>{" "}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <BaseHeader fontSize="20px">Password</BaseHeader>
            <ChangeParagraph onClick={() => setIsEditPassword((prev) => !prev)}>
              {isEditPassword ? "Accept" : "Change Password"}
            </ChangeParagraph>
          </div>
          <InputWrapper>
            <FloatingLabel>Your password</FloatingLabel>
            <StyledAdornment>
              <img src={hideIcon}></img>
            </StyledAdornment>
            <StyledInput
              name="password"
              disabled={!isEditPassword}
              type="password"
              placeholder=""
              defaultValue="***************"
            ></StyledInput>
          </InputWrapper>
          <BaseButton onClick={() => logoutHandler()}>Logout</BaseButton>
        </ProfileDataContainer>
      </UserProfileWrapper>
    </div>
  );
};

export default ProfilePage;
