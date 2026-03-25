import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setUser } from "../../store/authSlice";
import {
  PhotoWrapper,
  ProfilePicture,
  PhotoUploader,
} from "./ProfilePage.styles";
import userPicture from "../../assets/profile/user.png";
import photoUploader from "../../assets/profile/photoUpload.png";
import authApi from "../../api/authApi";

const AvatarSection = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => fileInputRef.current?.click();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      if (!reader.result || typeof reader.result !== "string") return;
      const base64 = reader.result as string;
      const updatedUser = await authApi.uploadAvatar(base64);
      dispatch(setUser(updatedUser.safeUser));
    };
    reader.readAsDataURL(file);
  };

  return (
    <PhotoWrapper>
      <ProfilePicture src={user?.avatar ? user.avatar : userPicture} />
      <PhotoUploader src={photoUploader} onClick={handleClick} />
      <input
        type="file"
        hidden
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </PhotoWrapper>
  );
};

export default AvatarSection;
