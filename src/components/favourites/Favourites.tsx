import { useEffect, useState } from "react";
import bookApi from "../../api/bookApi";
import type { Book } from "../../types/types";
import { BookCover } from "../book/BookProfile.style";
import {
  BookItemWrapper,
  FavouritesIcon,
} from "../main/Catalog/BookItem/BookItem.styles";
import favouritesIconFilled from "../../assets/icons/favouritesFilled.svg";
import { BooksWrapper } from "../main/Catalog/Catalog.styles";

const Favourites = () => {
  const [favourites, setFavourites] = useState<Book[]>([]);

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

  if (favourites.length === 0) return <div>No favourites yet.</div>;

  return (
    <BooksWrapper>
      {favourites.map((book) => (
        <BookItemWrapper>
          <BookCover src={`http://localhost:3000/public/${book.cover}`} />
          <FavouritesIcon
            src={favouritesIconFilled}
            onClick={() => toggleFavourite(+book.id)}
          />
          <div>{book.name}</div>
          <div>{book.author}</div>
        </BookItemWrapper>
      ))}
    </BooksWrapper>
  );
};

export default Favourites;
