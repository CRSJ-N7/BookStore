// components/BookItem/BookItem.tsx
import { BaseButton } from "../../../../shared/ui/Button/Button.styles";
import {
  BookItemWrapper,
  BookCover,
  BookTitle,
  BookAuthor,
} from "./BookItem.styles";

type Book = {
  id: string;
  author: string;
  cover: string;
  description: string;
  genre: string;
  name: string;
  price: number;
};

type BookItemProps = {
  book: Book;
};

const BookItem = ({ book }: BookItemProps) => {
  return (
    <BookItemWrapper>
      <BookCover
        src={`http://localhost:3000/public/${book.cover}`}
        alt={book.name}
      />
      <BookTitle>{book.name}</BookTitle>
      <BookAuthor>{book.author}</BookAuthor>
      <BaseButton style={{ alignSelf: "center", width: "100%" }}>
        {book.price}€
      </BaseButton>
    </BookItemWrapper>
  );
};

export default BookItem;
