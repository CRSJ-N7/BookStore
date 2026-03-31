import { useEffect, useState } from "react";
import bookApi from "../../api/bookApi";
import type { Book } from "../../types/types";

import favouritesIconFilled from "../../assets/icons/favouritesFilled.svg";
import { useAppDispatch } from "../../hooks/hooks";
import { setCurrentBook } from "../../store/bookSlice";
import { useNavigate } from "react-router-dom";

import {
  StyledBookCover,
  StyledBookTitle,
  StyledBookAuthor,
  StyledFavouriteIcon,
  FavouritesContainer,
  FavouritesWrapper,
  BookItemWrapper,
  FavouritesHeader,
} from "./Favourites.style";

const Favourites = () => {
  const [favourites, setFavourites] = useState<Book[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loadFavourites = async () => {
    try {
      const data = await bookApi.getFavourites();
      setFavourites(data);
    } catch (err) {
      console.error("Failed to load favourites:", err);
    }
  };

  useEffect(() => {
    setTimeout(() => loadFavourites());
  }, []);

  const toggleFavourite = async (bookId: number) => {
    try {
      await bookApi.toggleFavourite(bookId);
      await loadFavourites();
    } catch (err) {
      console.error("Failed to toggle favourite:", err);
    }
  };

  const clickHandler = async (id: number) => {
    const book = await bookApi.getBook(id);
    dispatch(setCurrentBook(book));

    navigate(`/books/${id}`);
  };

  if (favourites.length === 0) return <div>No favourites yet.</div>;

  return (
    <FavouritesContainer>
      <FavouritesHeader>My Favourites</FavouritesHeader>

      <FavouritesWrapper>
        {favourites.map((book) => (
          <BookItemWrapper key={book.id}>
            <StyledBookCover
              src={book.cover}
              onClick={() => clickHandler(book.id)}
            />

            <StyledFavouriteIcon
              src={favouritesIconFilled}
              onClick={() => toggleFavourite(book.id)}
            />

            <StyledBookTitle>{book.name}</StyledBookTitle>
            <StyledBookAuthor>{book.author}</StyledBookAuthor>
          </BookItemWrapper>
        ))}
      </FavouritesWrapper>
    </FavouritesContainer>
  );
};

export default Favourites;
