import {
  StyledAdornment,
  StyledInput,
} from "../../shared/ui/Header/Header.styles";
import emailIcon from "../../assets/icons/mail.svg";
import hideIcon from "../../assets/icons/hide.svg";
import { useState } from "react";

const SignUpPage = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isReplyPasswordHidden, setIsReplyPasswordHidden] = useState(true);

  return (
    <>
      <div style={{ fontSize: "55px" }}>LOG IN</div>
      <StyledInput
        placeholder="Email"
        disableUnderline
        startAdornment={
          <StyledAdornment position="start">
            <img src={emailIcon}></img>
          </StyledAdornment>
        }
      />
      <p>Enter your email</p>
      <StyledInput
        placeholder="Password"
        type={isPasswordHidden ? "password" : "text"}
        disableUnderline
        startAdornment={
          <StyledAdornment position="start">
            <img
              style={{ cursor: "pointer" }}
              src={hideIcon}
              onClick={() => setIsPasswordHidden(!isPasswordHidden)}
            ></img>
          </StyledAdornment>
        }
      />
      <p>Enter your password</p>
      <StyledInput
        placeholder="Password replay"
        type={isReplyPasswordHidden ? "password" : "text"}
        disableUnderline
        startAdornment={
          <StyledAdornment position="start">
            <img
              style={{ cursor: "pointer" }}
              src={hideIcon}
              onClick={() => setIsReplyPasswordHidden(!isReplyPasswordHidden)}
            ></img>
          </StyledAdornment>
        }
      />
      <p>Repeat your password without errors</p>
    </>
  );
};

export default SignUpPage;
