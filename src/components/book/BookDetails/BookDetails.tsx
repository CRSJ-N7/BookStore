import {
  CoverWrapper,
  BookCover,
  InfoWrapper,
  BookTitle,
  BookAuthor,
  RatingWrapper,
  Description,
  ButtonsWrapper,
} from "../BookProfile.style";

import StarRating from "../../main/Catalog/BookItem/StarRating/StarRating";
import { BaseButton } from "../../../shared/ui/Button/Button.styles";
import { BaseParagraph } from "../../../shared/styles/styles";
import type { Book } from "../../../types/types";

type Props = {
  book: Book;
  onRate: (value: number) => void;
};

const BookDetails = ({ book, onRate }: Props) => {
  return (
    <>
      <CoverWrapper>
        <BookCover src={book.cover} alt={book.name} />
      </CoverWrapper>

      <InfoWrapper>
        <BookTitle>{book.name}</BookTitle>
        <BookAuthor>{book.author}</BookAuthor>

        <RatingWrapper>
          <StarRating rating={book.avgRating ?? 0} onRate={onRate} />
          <span>{(book.avgRating ?? 0).toFixed(1)}</span>
        </RatingWrapper>

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
