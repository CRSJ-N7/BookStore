import Button from "../../shared/ui/Button/Button";
import { BaseHeader, BaseParagraph } from "../../shared/styles/styles";
import mainImg from "../../assets/main-page/primary/woman.png";
import booksImg from "../../assets/main-page/primary/books.png";
import {
  BackgroundImage,
  InfoWrapper,
  MainImage,
  MainWrapper,
} from "./Main.styles";

const Main = () => {
  return (
    <MainWrapper>
      <InfoWrapper>
        <BaseHeader>Build your library with us</BaseHeader>
        <BaseParagraph>
          Buy two books and <br></br>get one free
        </BaseParagraph>
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
