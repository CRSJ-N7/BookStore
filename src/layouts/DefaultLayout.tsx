import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useAppDispatch } from "../hooks/hooks";
import { useEffect } from "react";
import cartApi from "../api/cartApi";
import { setCart } from "../store/cartSlice";

const DefaultLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadCart = async () => {
      try {
        const data = await cartApi.getCart();
        dispatch(setCart(data));
      } catch (e) {
        console.error(e);
      }
    };

    loadCart();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
