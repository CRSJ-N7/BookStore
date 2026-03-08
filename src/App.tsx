import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./components/auth/AuthPage";
import ProfilePage from "./components/profile/ProfilePage";
import MainPage from "./components/main/MainPage";
import DefaultLayout from "./layouts/DefaultLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/authSlice";
import LogInPage from "./components/auth/log-in/LoginPage";
import SignUpPage from "./components/auth/sign-up/SingUpPage";
import { tokenStorage } from "./storage/tokenStorage";
import PrivateRoute, { ProtectedAuthRoute } from "./routes/PrivateRoutes";
import authApi from "./api/authApi";
import Admin from "./components/admin/Admin";
import bookApi from "./api/bookApi";
import { setBooks, setGenres } from "./store/bookSlice";
import { GlobalContainer } from "./App.styles";
import BookProfile from "./components/book/BookProfile";
import Cart from "./components/cart/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    authApi
      .getMe()
      .then((data) => {
        dispatch(setUser(data));
        console.log(data);
      })
      .catch(() => {
        console.log("зашли в clearAccess?");
        tokenStorage.clearAccess();
      });
  }, []);

  bookApi.getBooks().then((data) => {
    dispatch(setBooks(data));
  });

  bookApi.getGenres().then((data) => {
    dispatch(setGenres(data));
  });

  return (
    <GlobalContainer>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/books/:id" element={<BookProfile />} />

          <Route
            path="/auth"
            element={
              <ProtectedAuthRoute>
                <AuthPage />
              </ProtectedAuthRoute>
            }
          >
            <Route index element={<LogInPage />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourites" element={<Cart />} />
        </Route>
      </Routes>
    </GlobalContainer>
  );
}

export default App;
