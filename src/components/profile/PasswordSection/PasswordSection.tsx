import { useState } from "react";
import authApi from "../../../api/authApi";
import {
  ProfileHeaderWrapper,
  ChangeInfoWrapper,
  ChangeInfo,
  FloatingLabel,
} from "../ProfilePage.styles";
import {
  BaseHeader,
  InputWrapper,
  StyledAdornment,
  StyledInput,
} from "../../../shared/styles/styles";
import hideIcon from "../../../assets/icons/hide.svg";

const PasswordSection = () => {
  const [isEditPassword, setIsEditPassword] = useState(false);

  const [passwords, setPasswords] = useState({
    password: "",
    newPassword: "",
    repeatedPassword: "",
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

  const handleClick = () => {
    if (isEditPassword) {
      handleAcceptPassword();
    } else {
      setIsEditPassword(true);
    }
  };

  const someTitle = isEditPassword ? "Accept" : "Change password";

  return (
    <>
      <ProfileHeaderWrapper>
        <BaseHeader fontSize="20px">Password</BaseHeader>

        <ChangeInfoWrapper>
          <ChangeInfo onClick={handleClick}>{someTitle}</ChangeInfo>

          {isEditPassword && (
            <ChangeInfo onClick={handleCancelEditingPassword}>Back</ChangeInfo>
          )}
        </ChangeInfoWrapper>
      </ProfileHeaderWrapper>

      {/* OLD PASSWORD */}
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
            style={isEditPassword ? { cursor: "pointer" } : { cursor: "unset" }}
          />
        </StyledAdornment>

        <StyledInput
          variant="profile"
          name="password"
          type={showPassword.oldPassword ? "text" : "password"}
          disabled={!isEditPassword}
          value={isEditPassword ? passwords.password : "******************"}
          onChange={handlePasswordChange}
        />
      </InputWrapper>

      {/* NEW PASSWORD */}
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
              variant="profile"
              name="newPassword"
              type={showPassword.newPassword ? "text" : "password"}
              value={passwords.newPassword}
              onChange={handlePasswordChange}
            />
          </InputWrapper>

          {/* REPEAT PASSWORD */}
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
              variant="profile"
              name="repeatedPassword"
              type={showPassword.repeatedPassword ? "text" : "password"}
              value={passwords.repeatedPassword}
              onChange={handlePasswordChange}
            />
          </InputWrapper>
        </>
      )}
    </>
  );
};

export default PasswordSection;
