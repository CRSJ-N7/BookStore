import {
  ChangeParagraph,
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
  BaseParagraph,
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
          <InputWrapper>
            <StyledAdornment>
              <img src={profileIcon}></img>
            </StyledAdornment>
            <StyledInput
              name="name"
              type="input"
              placeholder=""
              value={user?.name}
            ></StyledInput>
          </InputWrapper>
          <InputWrapper>
            <StyledAdornment>
              <img src={emailIcon}></img>
            </StyledAdornment>
            <StyledInput
              name="email"
              type="input"
              placeholder=""
              value={user?.email}
            ></StyledInput>
          </InputWrapper>{" "}
          <InputWrapper>
            <StyledAdornment>
              <img src={hideIcon}></img>
            </StyledAdornment>
            <StyledInput
              name="confirmPassword"
              type="password"
              placeholder=""
              value="***************"
            ></StyledInput>
          </InputWrapper>
          <BaseButton onClick={() => logoutHandler()}>Logout</BaseButton>
        </ProfileDataContainer>
      </UserProfileWrapper>
    </div>
  );
};

export default ProfilePage;
