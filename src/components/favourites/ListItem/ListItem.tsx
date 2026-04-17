import type { Book } from "../../../types/types";
import {
  BookItemWrapper,
  StyledBookAuthor,
  StyledBookCover,
  StyledBookTitle,
  StyledFavouriteIcon,
} from "../Favourites.style";
import favouritesIconFilled from "../../../assets/icons/favouritesFilled.svg";
import { Link } from "react-router-dom";

type Props = {
  book: Book;
  onToggleFavourite: () => void;
};

const ListItem = ({ book, onToggleFavourite }: Props) => {
  return (
    <BookItemWrapper>
      <Link to={`/books/${book.id}`}>
        <StyledBookCover src={book.cover} />
      </Link>

      <StyledFavouriteIcon
        src={favouritesIconFilled}
        onClick={(e) => {
          onToggleFavourite();
          // e.stopPropagation();
        }}
      />

      <StyledBookTitle>{book.name}</StyledBookTitle>
      <StyledBookAuthor>{book.author}</StyledBookAuthor>
    </BookItemWrapper>
  );
};

export default ListItem;
