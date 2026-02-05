import styled from "@emotion/styled";
import MuiButton from "@mui/material/Button";

export const BaseButton = styled(MuiButton)`
  text-transform: none;
  border-radius: 8px;
  padding: 10px 50px;
  width: 231px;
  height: 44px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.75px;
  background: #344966;
  border-radius: 16px;
  color: #f0f4ef;
  transition: 0.5s all;

  &:hover:not(:focus) {
    opacity: 0.9;
    background: #0d1821;
  }
  &:focus {
    box-shadow: 0 0 0 8px rgba(214, 216, 231, 0.5);
    background: #344966;
  }
`;
