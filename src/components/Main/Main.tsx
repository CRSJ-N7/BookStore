import Button from "../../shared/ui/Button/Button";
import BaseHeader from "../../shared/styles/Header/HeaderText";
import mainImg from "../../assets/main-page/primary/woman.png";
import booksImg from "../../assets/main-page/primary/books.png";
import {
  BackgroundImage,
  InfoWrapper,
  MainImage,
  MainWrapper,
  TextParagraph,
} from "./Main.styles";

const Main = () => {
  return (
    <MainWrapper>
      <InfoWrapper>
        <BaseHeader>Build your library with us</BaseHeader>
        <TextParagraph>
          Buy two books and <br></br>get one free
        </TextParagraph>
        <Button variant="contained" style={{ zIndex: 2, marginTop: "50px" }}>
          Choose book
        </Button>
      </InfoWrapper>
      <div>
        <MainImage src={mainImg}></MainImage>
      </div>
      <BackgroundImage src={booksImg}></BackgroundImage>
    </MainWrapper>
  );
};

export default Main;
