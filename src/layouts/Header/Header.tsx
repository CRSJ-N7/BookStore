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
  SearchWrapper,
  ProfileIconsBlanked,
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
  StyledAdornment,
  StyledInput,
} from "../../shared/styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { type RootState } from "../../store/store";
import { useEffect, useState } from "react";
import cartApi from "../../api/cartApi";
import { setTotalItems } from "../../store/cartSlice";
import bookApi from "../../api/bookApi";

const Header = () => {
  const user = useSelector((state: RootState) => state.auth.user);
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

  const [value, setValue] = useState("");

  const handleChange = async (value: string) => {
    setValue(value);
  };
  const handleKeyDown = (key: string) => {
    if (key === "Enter") {
      setValue("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!value.trim()) {
        return;
      }

      const books = await bookApi.searchBook(value);
      console.log(books);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <HeaderWrapper>
      <BaseLogo src={logo} alt="logo" onClick={() => navigate("/")} />
      <SearchBlock>
        <CatalogText>Catalog</CatalogText>
        <SearchWrapper>
          <StyledAdornment>
            <img src={SearchIcon}></img>
          </StyledAdornment>
          <StyledInput
            variant="search"
            placeholder="Search"
            value={value}
            onChange={(event) => handleChange(event?.target.value)}
            onKeyDown={(e) => handleKeyDown(e.key)}
          />
        </SearchWrapper>
      </SearchBlock>
      {!user ? (
        <Button variant="contained" onClick={() => navigate("/auth/login")}>
          Log in / Sign Up
        </Button>
      ) : (
        <ProfileWrapper>
          <SvgTestWrapper onClick={() => navigate("/cart")}>
            <CartIconMainEllipse src={ElipseDark} />
            <CartIcon src={CartIconMain} />
            {totalCartItems !== 0 && (
              <>
                <CartIconSecondEllipse src={ElipseGreen} />
                <Quantity>{totalCartItems}</Quantity>
              </>
            )}
          </SvgTestWrapper>

          <ProfileIcons
            src={favouritesIcon}
            onClick={() => navigate("/favourites")}
          />

          {user.name && !user.avatar ? (
            <ProfileIconsBlanked onClick={() => navigate("/profile")}>
              {user.name.charAt(0).toUpperCase()}
            </ProfileIconsBlanked>
          ) : (
            <ProfileIcons
              src={
                user.avatar
                  ? `http://localhost:3000/uploads/${user.avatar}`
                  : profileIcon
              }
              onClick={() => navigate("/profile")}
            />
          )}
        </ProfileWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;
