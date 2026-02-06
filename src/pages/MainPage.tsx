import Auth from "../components/main-page/Auth/Auth";
import Catalog from "../components/main-page/Catalog/Catalog";
import Footer from "../shared/ui/Footer/Footer";
import Header from "../shared/ui/Input/Input";
import Main from "../components/main-page/Main/Main";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Catalog />
      <Auth />
      <Footer />
    </>
  );
};

export default MainPage;
