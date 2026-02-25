import logo from "../../assets/header/logo.png";
import {
  HeaderWrapper,
  SearchBlock,
  CatalogText,
  ProfileIcons,
  ProfileWrapper,
  CartIconMainEllipse,
  CartIconSecondEllipse,
  CartIcon,
  SvgTestWrapper,
} from "./Header.styles";
import SearchIcon from "../../assets/icons/Search.svg";
import profileIcon from "../../assets/icons/profileHeader.svg";
import favouritesIcon from "../../assets/icons/favouritesHeader.svg";

import CartIconMain from "../../assets/icons/Cart.svg";
import ElipseDark from "../../assets/icons/ElipseDark.svg";
import ElipseGreen from "../../assets/icons/ElipseGreen.svg";
import Button from "../../shared/ui/Button/Button";
import {
  BaseLogo,
  InputWrapper,
  StyledAdornment,
  StyledInput,
} from "../../shared/styles/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { type RootState } from "../../store/store";

const Header = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <BaseLogo src={logo} alt="logo" onClick={() => navigate("/")} />

      <SearchBlock>
        <CatalogText>Catalog</CatalogText>
        <InputWrapper>
          <StyledAdornment>
            <img src={SearchIcon}></img>
          </StyledAdornment>
          <StyledInput placeholder="Search books" />
        </InputWrapper>
      </SearchBlock>

      {!isAuth ? (
        <Button variant="contained" onClick={() => navigate("/auth/login")}>
          Log in / Sign Up
        </Button>
      ) : (
        <ProfileWrapper>
          <SvgTestWrapper>
            <CartIconMainEllipse src={ElipseDark} />
            <CartIconSecondEllipse src={ElipseGreen} />
            <CartIcon src={CartIconMain} />
          </SvgTestWrapper>

          <ProfileIcons src={favouritesIcon} />
          <ProfileIcons
            src={profileIcon}
            onClick={() => navigate("/profile")}
          />
        </ProfileWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;
