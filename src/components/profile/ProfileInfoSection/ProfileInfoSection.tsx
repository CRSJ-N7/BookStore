import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setUser } from "../../../store/authSlice";
import authApi from "../../../api/authApi";
import {
  ProfileHeaderWrapper,
  ChangeInfo,
  ChangeInfoWrapper,
  FloatingLabel,
} from "../ProfilePage.styles";
import {
  BaseHeader,
  InputWrapper,
  StyledAdornment,
  StyledInput,
} from "../../../shared/styles/styles";
import profileIcon from "../../../assets/icons/profile.svg";
import emailIcon from "../../../assets/icons/mail.svg";

const ProfileInfoSection = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const [isEditProfile, setIsEditProfile] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
  });

  const handleStartEditingProfile = () => {
    setProfileData({
      name: user?.name ?? "",
      email: user?.email ?? "",
    });

    setIsEditProfile(true);
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

    setProfileData({
      name: user?.name ?? "",
      email: user?.email ?? "",
    });
  };

  return (
    <>
      <ProfileHeaderWrapper>
        <BaseHeader fontSize="20px">Personal information</BaseHeader>

        {!isEditProfile ? (
          <ChangeInfo onClick={handleStartEditingProfile}>
            Change information
          </ChangeInfo>
        ) : (
          <ChangeInfoWrapper>
            <ChangeInfo onClick={handleAcceptUpdatingProfile}>
              Accept
            </ChangeInfo>
            <ChangeInfo onClick={handleCancelEditingProfile}>Back</ChangeInfo>
          </ChangeInfoWrapper>
        )}
      </ProfileHeaderWrapper>

      {/* NAME */}
      <InputWrapper>
        <FloatingLabel>Your name</FloatingLabel>

        <StyledAdornment>
          <img src={profileIcon} />
        </StyledAdornment>

        <StyledInput
          variant="profile"
          name="name"
          disabled={!isEditProfile}
          value={isEditProfile ? profileData.name : (user?.name ?? "")}
          onChange={handleProfileChange}
        />
      </InputWrapper>

      {/* EMAIL */}
      <InputWrapper>
        <FloatingLabel>Your email</FloatingLabel>

        <StyledAdornment>
          <img src={emailIcon} />
        </StyledAdornment>

        <StyledInput
          variant="profile"
          name="email"
          disabled={!isEditProfile}
          value={isEditProfile ? profileData.email : (user?.email ?? "")}
          onChange={handleProfileChange}
          style={{ width: "522px" }}
        />
      </InputWrapper>
    </>
  );
};

export default ProfileInfoSection;
