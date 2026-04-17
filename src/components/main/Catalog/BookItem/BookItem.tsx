import { BaseButton } from "../../../../shared/ui/Button/Button.styles";
import {
  BookItemWrapper,
  BookCover,
  BookTitle,
  BookAuthor,
  FavouritesIcon,
  Price,
} from "./BookItem.styles";

import favouritesIcon from "../../../../assets/icons/favourites.svg";
import favouritesIconFilled from "../../../../assets/icons/favouritesFilled.svg";

import type { Book } from "../../../../types/types";
import StarRating from "./StarRating/StarRating";

import bookApi from "../../../../api/bookApi";
import cartApi from "../../../../api/cartApi";

import { useState } from "react";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { setCart } from "../../../../store/cartSlice";
import { Link } from "react-router-dom";

type BookItemProps = {
  book: Book;
  isFavourite: boolean;
  toggleFavourite: (id: number) => void;
};

const BookItem = ({ book, isFavourite, toggleFavourite }: BookItemProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const [rating, setRating] = useState<number>(book.avgRating ?? 0);

  const handleRate = async (value: number) => {
    if (!user) {
      toast.info("You have to Log In first");
      return;
    }

    try {
      const data = await bookApi.rateBook(book.id, value);
      setRating(data.avgRating ?? 0);
    } catch (e) {
      toast.error(`Failed to set ratging, Error: ${e}`);
    }
  };

  const addToCartHandler = async (bookId: number) => {
    try {
      await cartApi.addToCart(bookId);
      const data = await cartApi.getCart();
      dispatch(setCart(data));
      toast.success(`Book ${book.name} added to cart`);
    } catch (e) {
      toast.error(`Failed to add to cart, error: ${e}`);
    }
  };

  return (
    <BookItemWrapper>
      <Link to={`/books/${book.id}`}>
        <BookCover src={book.cover} alt={book.name} />
      </Link>
      <FavouritesIcon
        src={isFavourite ? favouritesIconFilled : favouritesIcon}
        onClick={() => toggleFavourite(book.id)}
      />

      <BookTitle>{book.name}</BookTitle>
      <BookAuthor>{book.author}</BookAuthor>

      <StarRating rating={rating} onRate={handleRate} />

      <BaseButton
        style={{ width: "100%" }}
        onClick={() => addToCartHandler(book.id)}
      >
        <Price>{book.price} €</Price>
      </BaseButton>
    </BookItemWrapper>
  );
};

export default BookItem;
