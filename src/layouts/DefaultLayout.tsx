import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
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
      } catch {
        return;
      }
    };

    loadCart();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
