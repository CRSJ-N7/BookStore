import "./App.css";
import Auth from "./components/Auth/Auth";
// import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      {/* <Catalog /> */}
      <Auth />
      <Footer />
    </>
  );
}

export default App;
