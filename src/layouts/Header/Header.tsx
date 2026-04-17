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

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import bookApi from "../../api/bookApi";
import { useAppSelector } from "../../hooks/hooks";
import { type Book } from "../../types/types";
import BooksDropDown from "./BooksDropDown";

const Header = () => {
  const user = useAppSelector((state) => state.auth.user);
  const totalCartItems = useAppSelector((state) => state.cart.totalItems);

  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [dropDown, setDropdown] = useState<boolean>(false);
  const [searchedBooks, setSearchedBooks] = useState<Book[]>();

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleKeyDown = (key: string) => {
    if (key === "Enter") {
      // setValue("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!value.trim()) return;

      const books = await bookApi.searchBook(value);
      console.log(books);
      setSearchedBooks(books);
      setDropdown(true);
    }, 500);

    return () => {
      clearTimeout(timer);
      setDropdown(false);
    };
  }, [value]);

  return (
    <>
      <HeaderWrapper>
        <BaseLogo src={logo} alt="logo" onClick={() => navigate("/")} />
        <CatalogText onClick={() => navigate("/")}>Catalog</CatalogText>

        <SearchBlock>
          <SearchWrapper>
            <StyledAdornment>
              <img src={SearchIcon} />
            </StyledAdornment>

            <StyledInput
              variant="search"
              placeholder="Search"
              value={value}
              onChange={(event) => handleChange(event.target.value)}
              onKeyDown={(e) => handleKeyDown(e.key)}
            />
            {dropDown ? <BooksDropDown searchedBooks={searchedBooks} /> : null}
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

              {totalCartItems > 0 && (
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
                src={user.avatar ? user.avatar : profileIcon}
                onClick={() => navigate("/profile")}
              />
            )}
          </ProfileWrapper>
        )}
      </HeaderWrapper>
    </>
  );
};

export default Header;
