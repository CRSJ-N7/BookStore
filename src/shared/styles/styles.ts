import Button from "@mui/material/Button";
import styled from "styled-components";

export const BaseHeader = styled.h1<{ fontSize?: string }>`
  color: #0d1821;
  font-family: "Poppins", sans-serif;
  font-size: ${({ fontSize }) => fontSize ?? "40px"};
  font-weight: 700;
  cursor: pointer;
`;

export const BaseParagraph = styled.p`
  color: #344966;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 400;
`;

export const BaseLogo = styled.img`
  height: 40px;
`;

export const StyledButton = styled(Button)`
  text-transform: none;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledAdornment = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);

  img {
    width: 22px;
    height: 22px;
    opacity: 0.6;
  }
  z-index: 1;
`;

export const StyledInput = styled.input<{
  error?: boolean;
  success?: boolean;
}>`
  border-color: ${({ error, success }) =>
    error ? "#e53935" : success ? "#43a047" : "transparent"};

  background-color: #f5f5f5;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${({ error, success }) =>
      error ? "#e53935" : success ? "#43a047" : "#000"};
  }

  &::placeholder {
    color: #999;
  }
  width: 100%;
  position: relative;
  height: 64px;
  padding-inline: 50px;
  background-color: #f0f4ef;
  border-radius: 16px;
  border: none;
  outline: none;
  color: #344966;
`;
