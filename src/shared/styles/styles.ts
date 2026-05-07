import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

// const BREAK_POINTS = {
//   md: 834,
//   sm: 320,
// } as const;

// const getMediaString = (type: keyof typeof BREAK_POINTS) => {
//   return `@media screen and (max-width: ${BREAK_POINTS[type]}px)`
// }

// const getCustomString = (val: number) => {
//   return `@media screen and (max-width: ${val}px)`
// }

// const MEDIA_STRING = {
//   maxWidth: {
//     md: getMediaString('md'),
//     sm: getMediaString('sm'),
//     custom: getCustomString,
//   }
// }

// const theme = {
//   typography: {
//     body1: css`
//       font-size: 14px;
//       font-weight: 500;
//       line-height: 18px;
//     `,
//     body2: css`
//       font-size: 14px;
//       font-weight: 400;
//       line-height: 18px;
//     `
//   }
// } as const;

export const BaseHeader = styled.h1<{ profile?: boolean }>`
  color: #0d1821; // theme
  font-family: "Poppins", sans-serif; // base
  font-size: ${({ profile }) =>
    profile ? "clamp(16px, 2vw, 24px)" : "clamp(28px, 3vw, 40px)"};
  font-weight: 700;
  cursor: pointer;
`;

export const BaseParagraph = styled.p<{ fontSize?: string }>`
  color: #344966;
  font-family: "Poppins", sans-serif;
  font-size: ${({ fontSize }) => fontSize ?? "20px"};
  font-weight: 400;

  @media screen and (max-width: 834px) {
    font-size: 16px;
  }
`;

export const BaseLogo = styled.img`
  height: 40px;
  cursor: pointer;
`;

export const BaseInputToolTip = styled.p`
  margin-top: 9px;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.palette.primary.main};
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

type InputVariant = "search" | "profile" | "auth" | "comment";

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
  color: ${({ theme }) => theme.palette.primary.main};

  &:focus {
    outline: 1px solid #0d1821;
    background-color: white;
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.info.main};
    font-size: clamp(14px, 1.5vw, 18px);
  }

  @media screen and (max-width: 480px) {
    &::placeholder {
      /* font-size: 12px; */
    }
  }

  ${({ variant }) => {
    switch (variant) {
      case "search":
        return css`
          min-width: 0;
          max-width: inherit;
          width: 100%;
        `;

      case "auth":
        return css`
          width: 100%;
          max-width: 413px;
        `;

      case "profile":
        return css`
          width: 100%;
          max-width: 522px;
          padding-top: 15px;
          font-weight: 400;
        `;

      case "comment":
        return css`
          width: 100%;
          height: 128px;
          font-weight: 400;

          ::placeholder {
            position: absolute;
            left: 25px;
            top: 25px;
          }

          @media screen and (max-width: 480px) {
            height: 87px;
          }
        `;

      default:
        return css`
          width: 100%;
        `;
    }
  }}
`;

export const FlexWrapper = styled.div<{
  variant?: string;
  justify?: string;
  align?: string;
  maxWidth?: string;
}>`
  display: flex;
  gap: 14px;
  width: stretch;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "231px")};
  min-width: 0;
  flex-direction: ${({ variant }) => variant ?? "row"};
  justify-content: ${({ justify }) => justify ?? "flex-start"};
  align-items: ${({ align }) => align ?? "stretch"};

  .book-details__text {
    font-size: 16px;
  }
`;
