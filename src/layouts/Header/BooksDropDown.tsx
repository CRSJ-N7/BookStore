import { Link } from "react-router-dom";
import type { Book } from "../../types/types";
import {
  SearchBookContainer,
  SearchBookCover,
  SearchBookName,
  SearchBooksWrapper,
} from "./BooksDropwDown.style";

type Props = {
  searchedBooks?: Book[];
};

const BooksDropDown = ({ searchedBooks }: Props) => {
  return (
    <SearchBooksWrapper>
      {searchedBooks?.map((book) => {
        return (
          <SearchBookContainer>
            <Link to={`/books/${book.id}`}>
              <SearchBookCover src={book.cover} />
            </Link>
            <SearchBookName>{book.name}</SearchBookName>
          </SearchBookContainer>
        );
      })}
    </SearchBooksWrapper>
  );
};

export default BooksDropDown;
