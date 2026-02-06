import { BaseLogo, BaseParagraph } from "../../styles/styles";
import footerLogo from "../../../assets/footer/footer-logo.png";
import map from "../../../assets/footer/map.png";
import { InfoWrapper, FooterWrapper } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <InfoWrapper>
        <BaseLogo src={footerLogo} alt="logo" />
        <BaseParagraph style={{ marginTop: "25px" }}>
          tranthuy.nute@gmail.com
        </BaseParagraph>
        <BaseParagraph>(480) 555-0103</BaseParagraph>
      </InfoWrapper>

      <InfoWrapper>
        <BaseParagraph>Home page</BaseParagraph>
        <BaseParagraph>Catalog</BaseParagraph>
        <BaseParagraph>My account</BaseParagraph>
        <BaseParagraph>Cart</BaseParagraph>
      </InfoWrapper>

      <InfoWrapper>
        <BaseParagraph>6391 Elgin St. Celina, Delaware 10299</BaseParagraph>
        <img src={map} alt="logo"></img>
      </InfoWrapper>
    </FooterWrapper>
  );
};

export default Footer;
