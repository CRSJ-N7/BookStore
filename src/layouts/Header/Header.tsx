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
  ProfileIconsBlanked,
  RightSlot,
  HeaderStyledAdornment,
  InputContainer,
  BellWrapper,
  NotificationBadge,
  NotificationDropdown,
  NotificationEmpty,
  NotificationItem,
} from "./Header.styles";

import SearchIcon from "../../assets/icons/Search.svg";
import profileIcon from "../../assets/icons/profileHeader.svg";
import favouritesIcon from "../../assets/icons/favouritesHeader.svg";
import notificationBell from "../../assets/icons/notification-bell-svgrepo-com.svg";
import CartIconMain from "../../assets/icons/Cart.svg";
import ElipseDark from "../../assets/icons/EllipseLightBlue.svg";
import ElipseGreen from "../../assets/icons/EllipseGreen.svg";

import Button from "../../shared/ui/Button/Button";
import { BaseLogo, StyledInput } from "../../shared/styles/styles";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import bookApi from "../../api/bookApi";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { type Book } from "../../types/types";
import BooksDropDown from "./BooksDropDown";
import {
  addNotification,
  // markAllAsRead,
  removeNotification,
} from "../../store/notificationSlice";
import { getSocket } from "../../utilities/socket";

const Header = () => {
  const user = useAppSelector((state) => state.auth.user);
  const totalCartItems = useAppSelector((state) => state.cart.totalItems);
  const notifications = useAppSelector(
    (state) => state.notifications.notifications,
  );
  const unreadCount = notifications.filter(
    (notification) => !notification.isRead,
  ).length;

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [dropDown, setDropdown] = useState<boolean>(false);
  const [searchedBooks, setSearchedBooks] = useState<Book[]>();
  const [showNotifications, setShowNotifications] = useState(false);
  const bellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) return;

    const socket = getSocket();
    // const unsub = handleNotification((data) => {
    //   dispatch(
    //     addNotification({
    //       bookId: data.bookId,
    //       message: data.message,
    //     }),
    //   );
    // });

    // return unsub;

    socket.on("notification", (data: { bookId: number; message: string }) => {
      dispatch(
        addNotification({
          bookId: data.bookId,
          message: data.message,
        }),
      );
    });

    return () => {
      socket.off("notification");
    };
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!bellRef?.current?.contains(e.target as Node | null)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleBellClick = () => {
    setShowNotifications((prev) => !prev);
    // if (!showNotifications) {
    //   dispatch(markAllAsRead());
    // }
  };

  const handleNotificationClick = (id: string, bookId: number) => {
    dispatch(removeNotification(id));
    setShowNotifications(false);
    navigate(`/books/${bookId}`);
  };

  const handleChange = (value: string) => setValue(value);

  const handleKeyDown = (key: string) => {
    if (key === "Enter") {
      //
    }
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!value.trim()) return;
      const books = await bookApi.searchBook(value);
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
          <InputContainer>
            <HeaderStyledAdornment>
              <img src={SearchIcon} />
            </HeaderStyledAdornment>
            <StyledInput
              variant="search"
              placeholder="Search"
              value={value}
              onChange={(event) => handleChange(event.target.value)}
              onKeyDown={(e) => handleKeyDown(e.key)}
            />
            {dropDown ? <BooksDropDown searchedBooks={searchedBooks} /> : null}
          </InputContainer>
        </SearchBlock>

        <RightSlot>
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

              <BellWrapper ref={bellRef} onClick={handleBellClick}>
                <ProfileIcons src={notificationBell} />
                {unreadCount > 0 && (
                  <NotificationBadge>{unreadCount}</NotificationBadge>
                )}
                {showNotifications && (
                  <NotificationDropdown>
                    {notifications.length === 0 ? (
                      <NotificationEmpty>No notifications</NotificationEmpty>
                    ) : (
                      notifications.map((notification) => (
                        <NotificationItem
                          key={notification.id}
                          isRead={notification.isRead}
                          onClick={() =>
                            handleNotificationClick(
                              notification.id,
                              notification.bookId,
                            )
                          }
                        >
                          {notification.message}
                        </NotificationItem>
                      ))
                    )}
                  </NotificationDropdown>
                )}
              </BellWrapper>

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
        </RightSlot>
      </HeaderWrapper>
    </>
  );
};

export default Header;
