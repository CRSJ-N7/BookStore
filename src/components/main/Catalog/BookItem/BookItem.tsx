// components/BookItem/BookItem.tsx
import { BaseButton } from "../../../../shared/ui/Button/Button.styles";
import {
  BookItemWrapper,
  BookCover,
  BookTitle,
  BookAuthor,
  FavouritesIcon,
} from "./BookItem.styles";
import favouritesIcon from "../../../../assets/icons/favourites.svg";
import type { Book } from "../../../../types/types";

type BookItemProps = {
  book: Book;
  onClick: () => void;
};

const BookItem = ({ book, onClick }: BookItemProps) => {
  return (
    <BookItemWrapper>
      <BookCover
        src={`http://localhost:3000/public/${book.cover}`}
        alt={book.name}
        onClick={onClick}
      />
      <FavouritesIcon src={favouritesIcon} />

      <BookTitle>{book.name}</BookTitle>
      <BookAuthor>{book.author}</BookAuthor>
      <BaseButton style={{ alignSelf: "center", width: "100%" }}>
        {book.price}€
      </BaseButton>
    </BookItemWrapper>
  );
};

export default BookItem;
