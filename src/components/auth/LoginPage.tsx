import {
  StyledAdornment,
  StyledInput,
} from "../../layouts/Header/Header.styles";
import emailIcon from "../../assets/icons/mail.svg";
import hideIcon from "../../assets/icons/hide.svg";
import { useState } from "react";
import { BaseParagraph } from "../../shared/styles/styles";

const LogInPage = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

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
      <BaseParagraph style={{ fontSize: "14px" }}>
        Enter your email
      </BaseParagraph>
      <StyledInput
        placeholder="Password"
        disableUnderline
        type={isPasswordHidden ? "password" : "text"}
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
      <BaseParagraph style={{ fontSize: "14px" }}>
        Enter your password
      </BaseParagraph>
    </>
  );
};

export default LogInPage;
