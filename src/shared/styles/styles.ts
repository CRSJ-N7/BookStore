import Button from "@mui/material/Button";
import styled, { css } from "styled-components";

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
  cursor: pointer;
`;

export const BaseInputToolTip = styled.p`
  margin-top: 9px;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  color: #344966;
  letter-spacing: 0.75px;
`;

export const StyledButton = styled(Button)`
  text-transform: none;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

type InputVariant = "search" | "profile" | "auth";

export const StyledInput = styled.input<{ variant?: InputVariant }>`
  font-size: 16px;
  height: 64px;
  padding-inline: 50px;

  background-color: #f0f4ef;
  border-radius: 16px;
  border: 1px solid transparent;
  outline: none;
  letter-spacing: 0.75px;
  font-family: "Poppins", sans-serif;

  color: #344966;

  &:focus {
    outline: 1px solid #0d1821;
    background-color: white;
  }

  &::placeholder {
    color: #999;
  }

  ${({ variant }) => {
    switch (variant) {
      case "search":
        return css`
          min-width: 0;
          max-width: 630px;
          width: 100%;
        `;

      case "auth":
        return css`
          width: 413px;
        `;

      case "profile":
        return css`
          width: 522px;
          padding-top: 15px;
          font-weight: 400;
        `;

      default:
        return css`
          width: 100%;
        `;
    }
  }}
`;

export const FlexWrapper = styled.div<{ variant?: string }>`
  display: flex;
  flex-direction: ${({ variant }) => variant ?? "row"};
`;
