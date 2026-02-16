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
import { logOut, setUser } from "../../store/authSlice";
import { useState } from "react";
import authApi from "../../api/authApi";

const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);

  const [passwords, setPasswords] = useState({
    password: "",
    newPassword: "",
    repeatedPassword: "",
  });

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
  });

  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    repeatedPassword: false,
  });

  const handleMouseDown = (field: string) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleMouseUp = (field: string) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAcceptPassword = async () => {
    try {
      await authApi.changePassword(passwords);

      setIsEditPassword(false);

      setPasswords({
        password: "",
        newPassword: "",
        repeatedPassword: "",
      });

      alert("Password changed successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancelEditingPassword = () => {
    setIsEditPassword(false);

    setPasswords({
      password: "",
      newPassword: "",
      repeatedPassword: "",
    });
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAcceptUpdatingProfile = async () => {
    try {
      const updatedUser = await authApi.updateProfile(profileData);
      setIsEditProfile(false);
      dispatch(setUser(updatedUser.user));
      setProfileData({
        name: "",
        email: "",
      });

      alert("Profile changed successfully");
    } catch (error) {
      alert(error);

      setProfileData({
        name: user?.name ?? "",
        email: user?.email ?? "",
      });

      console.log(error);
    }
  };

  const handleCancelEditingProfile = () => {
    setIsEditProfile(false);
    setProfileData((prev) => prev);
  };

  const handleStartEditingProfile = () => {
    setProfileData({
      name: user?.name ?? "",
      email: user?.email ?? "",
    });

    setIsEditProfile(true);
  };

  return (
    <div>
      <UserProfileWrapper>
        <PhotoWrapper>
          <ProfilePicture src={userPicture} />
          <PhotoUploader src={photoUploader} />
        </PhotoWrapper>
        <ProfileDataContainer>
          <div style={{ display: "flex", gap: "12px" }}>
            <BaseHeader fontSize="20px">Personal information</BaseHeader>
            {!isEditProfile ? (
              <ChangeParagraph onClick={handleStartEditingProfile}>
                Change information
              </ChangeParagraph>
            ) : (
              <>
                <ChangeParagraph onClick={handleAcceptUpdatingProfile}>
                  Accept
                </ChangeParagraph>
                <ChangeParagraph onClick={handleCancelEditingProfile}>
                  Back
                </ChangeParagraph>
              </>
            )}
          </div>
          <InputWrapper>
            <FloatingLabel>Your name</FloatingLabel>
            <StyledAdornment>
              <img src={profileIcon}></img>
            </StyledAdornment>

            <StyledInput
              name="name"
              disabled={!isEditProfile}
              value={isEditProfile ? profileData.name : (user?.name ?? "")}
              onChange={handleProfileChange}
            />
          </InputWrapper>
          <InputWrapper>
            <FloatingLabel>Your email</FloatingLabel>
            <StyledAdornment>
              <img src={emailIcon}></img>
            </StyledAdornment>
            <StyledInput
              name="email"
              disabled={!isEditProfile}
              value={isEditProfile ? profileData.email : (user?.email ?? "")}
              onChange={handleProfileChange}
            ></StyledInput>
          </InputWrapper>{" "}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <BaseHeader fontSize="20px">Password</BaseHeader>
            <ChangeParagraph
              onClick={() => {
                if (isEditPassword) {
                  handleAcceptPassword();
                } else {
                  setIsEditPassword(true);
                }
              }}
            >
              {isEditPassword ? "Accept" : "Change Password"}
            </ChangeParagraph>
            {isEditPassword && (
              <ChangeParagraph onClick={handleCancelEditingPassword}>
                Back
              </ChangeParagraph>
            )}
          </div>
          {/* Old password */}
          <InputWrapper>
            <FloatingLabel>
              {isEditPassword ? "Old password" : "Your password"}
            </FloatingLabel>
            <StyledAdornment>
              <img
                src={hideIcon}
                onMouseDown={() =>
                  isEditPassword ? handleMouseDown("oldPassword") : null
                }
                onMouseUp={() =>
                  isEditPassword ? handleMouseUp("oldPassword") : null
                }
                onMouseLeave={() =>
                  isEditPassword ? handleMouseUp("oldPassword") : null
                }
                style={
                  isEditPassword ? { cursor: "pointer" } : { cursor: "unset" }
                }
              />
            </StyledAdornment>
            <StyledInput
              name="password"
              type={showPassword.oldPassword ? "text" : "password"}
              disabled={!isEditPassword}
              value={isEditPassword ? passwords.password : "*********"}
              onChange={handlePasswordChange}
            />
          </InputWrapper>
          {/* New password */}
          {isEditPassword && (
            <>
              <InputWrapper>
                <FloatingLabel>New password</FloatingLabel>
                <StyledAdornment>
                  <img
                    src={hideIcon}
                    onMouseDown={() => handleMouseDown("newPassword")}
                    onMouseUp={() => handleMouseUp("newPassword")}
                    onMouseLeave={() => handleMouseUp("newPassword")}
                    style={{ cursor: "pointer" }}
                  />
                </StyledAdornment>
                <StyledInput
                  name="newPassword"
                  type={showPassword.newPassword ? "text" : "password"}
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                />
              </InputWrapper>

              <InputWrapper>
                <FloatingLabel>Repeat password</FloatingLabel>
                <StyledAdornment>
                  <img
                    src={hideIcon}
                    onMouseDown={() => handleMouseDown("repeatedPassword")}
                    onMouseUp={() => handleMouseUp("repeatedPassword")}
                    onMouseLeave={() => handleMouseUp("repeatedPassword")}
                    style={{ cursor: "pointer" }}
                  />
                </StyledAdornment>
                <StyledInput
                  name="repeatedPassword"
                  type={showPassword.repeatedPassword ? "text" : "password"}
                  value={passwords.repeatedPassword}
                  onChange={handlePasswordChange}
                />
              </InputWrapper>
            </>
          )}
          <BaseButton onClick={logoutHandler}>Logout</BaseButton>
        </ProfileDataContainer>
      </UserProfileWrapper>
    </div>
  );
};

export default ProfilePage;
