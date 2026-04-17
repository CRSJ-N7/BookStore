import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { BaseButton } from "../../shared/ui/Button/Button.styles";
import {
  CartWrapper,
  BookTitle,
  BookAuthorName,
  BookItemContainer,
  QuantityWrapper,
  BookDataWrapper,
  QuantityButton,
  CheckoutWrapper,
  TotalPrice,
  ItemPrice,
  BookCover,
} from "./Cart.styles";

import cartApi from "../../api/cartApi";

import { setCart } from "../../store/cartSlice";

import DeleteIcon from "../../assets/icons/Delete.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Divider from "@mui/material/Divider";

const Cart = () => {
  const dispatch = useAppDispatch();

  const { items, totalPrice } = useAppSelector((state) => state.cart);

  const loadCart = async () => {
    try {
      const data = await cartApi.getCart();
      dispatch(setCart(data));
    } catch (e) {
      toast.error(`Failed to load cart, Error: ${e}`);
    }
  };

  const handleQuantityChange = async (bookId: number, quantity: number) => {
    try {
      await cartApi.updateQuantity(bookId, quantity);
      await loadCart();
    } catch (e) {
      toast.error(`Failed to update quantity, Error: ${e}`);
    }
  };

  const removeFromCartHandler = async (bookId: number) => {
    try {
      await cartApi.removeFromCart(bookId);
      await loadCart();
    } catch (e) {
      toast.error(`Failed to remove item, Error: ${e}`);
    }
  };

  const clearCartHandler = async () => {
    try {
      for (const book of items) {
        await cartApi.updateQuantity(book.id, 0);
      }
      await loadCart();
    } catch {
      toast.error(`Failed to clear cart`);
    }
  };

  if (items.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <CartWrapper>
      {items.map((book) => (
        <>
          <BookItemContainer key={book.id}>
            <Link to={`/books/${book.id}`}>
              <BookCover src={book.cover} />
            </Link>

            <BookDataWrapper>
              <BookTitle>{book.name}</BookTitle>
              <BookAuthorName>{book.author}</BookAuthorName>

              <QuantityWrapper>
                <QuantityButton
                  onClick={() =>
                    handleQuantityChange(book.id, (book.quantity ?? 1) + 1)
                  }
                >
                  +
                </QuantityButton>

                <span>{book.quantity ?? 1}</span>

                <QuantityButton
                  onClick={() =>
                    handleQuantityChange(
                      book.id,
                      Math.max((book.quantity ?? 1) - 1, 0),
                    )
                  }
                >
                  -
                </QuantityButton>

                <img
                  src={DeleteIcon}
                  onClick={() => removeFromCartHandler(book.id)}
                />
              </QuantityWrapper>

              <ItemPrice>€ {book.price} EUR</ItemPrice>
            </BookDataWrapper>
          </BookItemContainer>
          <Divider />
        </>
      ))}

      <TotalPrice>
        Total: <strong>{totalPrice}€</strong>
      </TotalPrice>

      <CheckoutWrapper>
        <BaseButton option="secondary" onClick={clearCartHandler}>
          Clear Cart
        </BaseButton>

        <BaseButton>Checkout</BaseButton>
      </CheckoutWrapper>
    </CartWrapper>
  );
};

export default Cart;
