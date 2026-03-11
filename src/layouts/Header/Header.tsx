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
  Quantity,
} from "./Header.styles";
import SearchIcon from "../../assets/icons/Search.svg";
import profileIcon from "../../assets/icons/profileHeader.svg";
import favouritesIcon from "../../assets/icons/favouritesHeader.svg";
import CartIconMain from "../../assets/icons/Cart.svg";
import ElipseDark from "../../assets/icons/EllipseLightBlue.svg";
import ElipseGreen from "../../assets/icons/EllipseGreen.svg";
import Button from "../../shared/ui/Button/Button";
import {
  BaseLogo,
  InputWrapper,
  StyledAdornment,
  StyledInput,
} from "../../shared/styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { type RootState } from "../../store/store";
import { useEffect } from "react";
import cartApi from "../../api/cartApi";
import { setTotalItems } from "../../store/cartSlice";

const Header = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const totalCartItems = useSelector(
    (state: RootState) => state.cart.totalItems,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const countItems = async () => {
      const items = await cartApi.getCart();
      dispatch(setTotalItems(items.totalItems));
    };

    countItems();
  }, [dispatch]);

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
          <SvgTestWrapper onClick={() => navigate("/cart")}>
            <CartIconMainEllipse src={ElipseDark} />
            <CartIconSecondEllipse src={ElipseGreen} />
            <CartIcon src={CartIconMain} />
            <Quantity>{totalCartItems}</Quantity>
          </SvgTestWrapper>

          <ProfileIcons
            src={favouritesIcon}
            onClick={() => navigate("/favourites")}
          />
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
