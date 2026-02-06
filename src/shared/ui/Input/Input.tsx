import logo from "../../../assets/header/logo.png";
import {
  HeaderWrapper,
  SearchBlock,
  CatalogText,
  StyledInput,
} from "./Input.styles";
import SearchIcon from "../../../assets/icons/Search.svg";
import { StyledAdornment } from "./Input.styles";
import Button from "../Button/Button";
import { BaseLogo } from "../../styles/styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <BaseLogo src={logo} alt="logo" />

      <SearchBlock>
        <CatalogText>Catalog</CatalogText>
        <StyledInput
          disableUnderline
          placeholder="Search books"
          startAdornment={
            <StyledAdornment position="start">
              <img src={SearchIcon} alt="search" />
            </StyledAdornment>
          }
        />
      </SearchBlock>

      <Button variant="contained">Log in / Sign Up</Button>
    </HeaderWrapper>
  );
};

export default Header;
