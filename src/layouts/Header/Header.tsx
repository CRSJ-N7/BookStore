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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { type RootState } from "../../store/store";

const Header = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <BaseLogo src={logo} alt="logo" onClick={() => navigate("/")} />

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

      {!isAuth ? (
        <Button variant="contained" onClick={() => navigate("/auth/login")}>
          Log in / Sign Up
        </Button>
      ) : (
        <Button variant="contained" onClick={() => navigate("/profile")}>
          {user?.name ?? "Profile"}
        </Button>
      )}
    </HeaderWrapper>
  );
};

export default Header;
