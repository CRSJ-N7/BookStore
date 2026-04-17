import { useEffect, useState } from "react";
import bookApi from "../../api/bookApi";
import type { Book } from "../../types/types";

import {
  FavouritesContainer,
  FavouritesWrapper,
  FavouritesHeader,
} from "./Favourites.style";
import ListItem from "./ListItem/ListItem";
import { toast } from "react-toastify";

const Favourites = () => {
  const [favourites, setFavourites] = useState<Book[]>([]);

  const loadFavourites = async () => {
    try {
      const data = await bookApi.getFavourites();
      setFavourites(data);
    } catch (err) {
      toast.error(err as string);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  const handleToggleFavourite = async (id: number) => {
    try {
      await bookApi.toggleFavourite(id);
      await loadFavourites();
    } catch (err) {
      toast.error(err as string);
    }
  };

  if (!favourites.length) {
    return <div>No favourites yet.</div>;
  }

  return (
    <FavouritesContainer>
      <FavouritesHeader>My Favourites</FavouritesHeader>

      <FavouritesWrapper>
        {favourites.map((book) => (
          <ListItem
            key={book.id}
            book={book}
            onToggleFavourite={() => handleToggleFavourite(book.id)}
          />
        ))}
      </FavouritesWrapper>
    </FavouritesContainer>
  );
};

export default Favourites;
