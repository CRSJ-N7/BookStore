import {
  CoverWrapper,
  BookCover,
  InfoWrapper,
  BookTitle,
  BookAuthor,
  Description,
  ButtonsWrapper,
} from "../BookProfile.style";
import Arrow from "../../../assets/icons/RateArrow.svg";
import StarRating from "../../main/Catalog/BookItem/StarRating/StarRating";
import { BaseButton } from "../../../shared/ui/Button/Button.styles";
import { BaseParagraph } from "../../../shared/styles/styles";
import type { Book } from "../../../types/types";
import { RateArrow, RatingWrapper } from "./BookDetails.styles";

type Props = {
  book: Book;
  onRate: (value: number) => void;
};

const BookDetails = ({ book, onRate }: Props) => {
  return (
    <>
      <CoverWrapper>
        <BookCover
          style={{ width: "522px", height: "779px" }}
          src={book.cover}
          alt={book.name}
        />
      </CoverWrapper>

      <InfoWrapper>
        <BookTitle>{book.name}</BookTitle>
        <BookAuthor>{book.author}</BookAuthor>

        <RatingWrapper>
          <StarRating rating={book.avgRating ?? 0} onRate={onRate} noMargin />
          <RateArrow src={Arrow} />
          <BaseParagraph style={{ color: "#B9BAC3", fontSize: "16px" }}>
            {" "}
            Rate this book
          </BaseParagraph>
        </RatingWrapper>

        <BookAuthor>Description</BookAuthor>
        <Description>{book.description}</Description>

        <ButtonsWrapper>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <BaseParagraph>Paperback</BaseParagraph>
            <BaseButton available={false}>Not Available</BaseButton>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <BaseParagraph>Hardcover</BaseParagraph>
            <BaseButton>{book.price}€</BaseButton>
          </div>
        </ButtonsWrapper>
      </InfoWrapper>
    </>
  );
};

export default BookDetails;
