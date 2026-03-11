import { BaseButton } from "../../../../shared/ui/Button/Button.styles";
import {
  BookItemWrapper,
  BookCover,
  BookTitle,
  BookAuthor,
  FavouritesIcon,
} from "./BookItem.styles";
import favouritesIcon from "../../../../assets/icons/favourites.svg";
import favouritesIconFilled from "../../../../assets/icons/favouritesFilled.svg";
import type { Book } from "../../../../types/types";
import StarRating from "./StarRating/StarRating";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";
import bookApi from "../../../../api/bookApi";
import { useState } from "react";
import cartApi from "../../../../api/cartApi";
import { setCart, setTotalItems } from "../../../../store/cartSlice";

type BookItemProps = {
  book: Book;
  onClick: () => void;
  isFavourite: boolean;
  toggleFavourite: (id: number) => void;
};

const BookItem = ({
  book,
  onClick,
  isFavourite,
  toggleFavourite,
}: BookItemProps) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const [rating, setRating] = useState<number>(book.avgRating ?? 0);

  const handleRate = async (value: number) => {
    if (!user) {
      alert("Login first");
      return;
    }

    try {
      const data = await bookApi.rateBook(+book.id, value);

      setRating(data.avgRating ?? 0);
    } catch (err) {
      console.error(err);
    }
  };

  const addToCartHandler = async (bookId: number) => {
    const cart = await cartApi.addToCart(bookId);
    dispatch(setCart(cart));

    const cartItems = await cartApi.getCart();
    dispatch(setTotalItems(cartItems.totalItems));
  };

  return (
    <BookItemWrapper>
      <BookCover
        src={`http://localhost:3000/public/${book.cover}`}
        alt={book.name}
        onClick={onClick}
      />

      <FavouritesIcon
        src={isFavourite ? favouritesIconFilled : favouritesIcon}
        onClick={() => toggleFavourite(+book.id)}
      />

      <BookTitle>{book.name}</BookTitle>

      <BookAuthor>{book.author}</BookAuthor>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        <StarRating rating={rating} onRate={handleRate} />

        <span>{rating.toFixed(1)}</span>
      </div>

      <BaseButton
        style={{ alignSelf: "center", width: "100%" }}
        onClick={() => addToCartHandler(+book.id)}
      >
        {book.price}€
      </BaseButton>
    </BookItemWrapper>
  );
};

export default BookItem;
