import { ProfileDataContainer, UserProfileWrapper } from "./ProfilePage.styles";
import AvatarSection from "./AvatarSection/AvatarSection";
import ProfileInfoSection from "./ProfileInfoSection/ProfileInfoSection";
import PasswordSection from "./PasswordSection/PasswordSection";
import { BaseButton } from "../../shared/ui/Button/Button.styles";
import { useAppDispatch } from "../../hooks/hooks";
import { logOut } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <UserProfileWrapper>
      <AvatarSection />
      <ProfileDataContainer>
        <ProfileInfoSection />
        <PasswordSection />
        <BaseButton onClick={logoutHandler}>Logout</BaseButton>
      </ProfileDataContainer>
    </UserProfileWrapper>
  );
};

export default ProfilePage;
