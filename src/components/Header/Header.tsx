import logo from "../../assets/header/logo.png";
import {
  HeaderWrapper,
  SearchBlock,
  CatalogText,
  StyledInput,
} from "./Header.styles";
import SearchIcon from "../../assets/icons/Search.svg";
import { StyledAdornment } from "./Header.styles";
import Button from "../../shared/ui/Button/Button";
import { BaseLogo } from "../../shared/styles/styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <BaseLogo src={logo} alt="logo" />

      <SearchBlock>
        <CatalogText>Catalog</CatalogText>
        <StyledInput
          placeholder="Search books"
          disableUnderline
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
