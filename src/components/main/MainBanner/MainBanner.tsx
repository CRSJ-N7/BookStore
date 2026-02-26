import mainImg from "../../../assets/main-page/primary/woman.png";
import booksImg from "../../../assets/main-page/primary/books.png";
import {
  BackgroundImage,
  InfoWrapper,
  MainImage,
  MainWrapper,
} from "./MainBanner.styles";
import InfoContainer from "../../../shared/ui/Info/InfoContainer";

const MainBanner = () => {
  const paragraph = (
    <>
      Buy two books and <br />
      get one free;
    </>
  );
  const header = "Build your library with us";
  const buttonText = "Choose book";

  return (
    <MainWrapper>
      <InfoWrapper>
        <InfoContainer
          paragraph={paragraph}
          header={header}
          buttonText={buttonText}
          buttonProps={{
            variant: "contained",
            style: { marginTop: "50px", zIndex: 2 },
          }}
        />
      </InfoWrapper>
      <BackgroundImage src={booksImg}></BackgroundImage>
      <MainImage src={mainImg}></MainImage>
    </MainWrapper>
  );
};

export default MainBanner;
