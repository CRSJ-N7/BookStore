import { ProfileDataContainer, UserProfileWrapper } from "./ProfilePage.styles";
import AvatarSection from "./AvatarSection/AvatarSection";
import ProfileInfoSection from "./ProfileInfoSection/ProfileInfoSection";
import PasswordSection from "./PasswordSection/PasswordSection";
import { BaseButton } from "../../shared/ui/Button/Button.styles";
import { useAppDispatch } from "../../hooks/hooks";
import { logOut } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { ButtonWrapper } from "../../shared/ui/Info/InfoContainer.styles";

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
        <ButtonWrapper>
          <BaseButton onClick={logoutHandler}>Logout</BaseButton>
        </ButtonWrapper>
      </ProfileDataContainer>
    </UserProfileWrapper>
  );
};

export default ProfilePage;
