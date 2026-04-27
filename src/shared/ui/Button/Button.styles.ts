import styled from "@emotion/styled";
import MuiButton from "@mui/material/Button";

type ButtonStyled = {
  available?: boolean;
  option?: "default" | "secondary";
};

export const BaseButton = styled(MuiButton)<ButtonStyled>`
  && {
    text-transform: none;
    padding: 10px 50px;
    width: 231px;
    height: 44px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.75px;
    background: #344966;
    border-radius: 16px;
    color: #f0f4ef;
    transition: 0.3s all;
  }

  &&:hover:not(:focus) {
    opacity: 0.9;
    background: #0d1821;
  }

  &&:focus {
    box-shadow: 0 0 0 8px rgba(214, 216, 231, 0.5);
    background: #344966;
  }

  ${(props) =>
    props.disabled &&
    `
    && {
      background: #e0e0e0 !important;
      color: #9e9e9e !important;
      cursor: not-allowed;
      opacity: 1 !important;
    }

    &&:hover {
      background: #e0e0e0 !important;
      opacity: 1;
    }
  `}

  &&.Mui-disabled {
    pointer-events: auto;
    cursor: not-allowed;
  }

  ${(props) =>
    props.option === "secondary" &&
    `
    && {
      background: white;
      color: #0D1821;
      border: 1px solid #0D1821;
    }

    &&:hover:not(:focus) {
      border: 3px solid #0D1821;
      background: white;
      transition: none;
    }

    &&:focus {
      box-shadow: 0 0 0 8px rgba(214, 216, 231, 0.5);
      background: white;
    }
  `}
`;
