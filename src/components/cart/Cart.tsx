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
  ItemPrice,
  BookCover,
  TotalPriceWrapper,
  TotalPrice,
  EmptyCartContainer,
  CartImage,
  EmptyCartInfoWrapper,
  ButtonWrapper,
} from "./Cart.styles";

import cartApi from "../../api/cartApi";

import { setCart } from "../../store/cartSlice";

import DeleteIcon from "../../assets/icons/Delete.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Divider from "@mui/material/Divider";
import { BaseHeader, BaseParagraph } from "../../shared/styles/styles";
import EmptyCart from "../../assets/cart/emptyFolder.png";

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
    return (
      <EmptyCartContainer>
        <CartImage src={EmptyCart}></CartImage>
        <EmptyCartInfoWrapper>
          <BaseHeader>Your cart is empty</BaseHeader>
          <BaseParagraph>
            Add items to cart to make a purchase. <br />
            Go to the catalogue no.
          </BaseParagraph>
          <Link to={"/"}>
            <ButtonWrapper>
              <BaseButton>Go to catalog</BaseButton>
            </ButtonWrapper>
          </Link>
        </EmptyCartInfoWrapper>
      </EmptyCartContainer>
    );
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

      <TotalPriceWrapper>
        <TotalPrice>
          Total: <strong>{totalPrice}€</strong>
        </TotalPrice>
      </TotalPriceWrapper>

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
