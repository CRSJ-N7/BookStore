import {
  StyledAdornment,
  StyledInput,
} from "../../shared/ui/Header/Header.styles";
import emailIcon from "../../assets/icons/mail.svg";
import hideIcon from "../../assets/icons/hide.svg";
import { useState } from "react";

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
      <p>Enter your email</p>
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
      <p>Enter your password</p>
    </>
  );
};

export default LogInPage;
