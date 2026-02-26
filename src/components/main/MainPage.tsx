import AuthBanner from "./AuthBanner/AuthBanner";
import Catalog from "./Catalog/Catalog";
import MainBanner from "./MainBanner/MainBanner";

export const MainPage = () => {
  return (
    <>
      <MainBanner />
      <Catalog />
      <AuthBanner />
    </>
  );
};

export default MainPage;
