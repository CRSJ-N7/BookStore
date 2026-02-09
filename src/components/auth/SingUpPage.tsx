import {
  StyledAdornment,
  StyledInput,
} from "../../layouts/Header/Header.styles";
import emailIcon from "../../assets/icons/mail.svg";
import hideIcon from "../../assets/icons/hide.svg";
import { useState } from "react";
import { BaseParagraph } from "../../shared/styles/styles";

const SignUpPage = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isReplyPasswordHidden, setIsReplyPasswordHidden] = useState(true);

  return (
    <>
      <div style={{ fontSize: "55px" }}>SIGN UP</div>
      <StyledInput
        placeholder="Email"
        disableUnderline
        startAdornment={
          <StyledAdornment position="start">
            <img src={emailIcon}></img>
          </StyledAdornment>
        }
      />
      <BaseParagraph style={{ fontSize: "14px" }}>
        Enter your email
      </BaseParagraph>
      <StyledInput
        placeholder="Password"
        type={isPasswordHidden ? "password" : "text"}
        disableUnderline
        startAdornment={
          <StyledAdornment position="start">
            <img
              src={hideIcon}
              onClick={() => setIsPasswordHidden(!isPasswordHidden)}
            ></img>
          </StyledAdornment>
        }
      />
      <BaseParagraph style={{ fontSize: "14px" }}>
        Enter your password
      </BaseParagraph>
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
      <BaseParagraph style={{ fontSize: "14px" }}>
        Repeat your password without errors
      </BaseParagraph>
    </>
  );
};

export default SignUpPage;
