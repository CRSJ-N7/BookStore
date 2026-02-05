import styled from "styled-components";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 24px;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const SearchBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 630px;
`;

export const CatalogText = styled.p`
  font-weight: 500;
  font-family: "Poppins";
  cursor: pointer;
`;

export const StyledInput = styled(Input)`
  width: 630px;
  height: 64px;
  padding-inline: 24px;
  background-color: #f0f4ef;
  border-radius: 16px;
  text-underline-offset: none;
`;

export const StyledButton = styled(Button)`
  text-transform: none;
`;

export const StyledAdornment = styled(InputAdornment)`
  margin-right: 8px;

  img {
    width: 24px;
    height: 24px;
    opacity: 0.6;
    margin: 6px;
  }
`;
