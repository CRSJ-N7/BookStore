import AuthBanner from "./AuthBanner/AuthBanner";
import Catalog from "./Catalog/Catalog";
import Main from "./Main/Main";

export const MainPage = () => {
  return (
    <>
      <Main />
      <Catalog />
      <AuthBanner />
    </>
  );
};

export default MainPage;
