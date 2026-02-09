import Auth from "../components/main-page/Auth/Auth";
import Catalog from "../components/main-page/Catalog/Catalog";
import Main from "../components/main-page/Main/Main";

export const MainPage = () => {
  return (
    <>
      <Main />
      <Catalog />
      <Auth />
    </>
  );
};

export default MainPage;
