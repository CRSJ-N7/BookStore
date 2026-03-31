import { useEffect, useState } from "react";
import { BaseButton } from "../../shared/ui/Button/Button.styles";
import cartApi from "../../api/cartApi";
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
import type { Book } from "../../types/types";
import { useDispatch } from "react-redux";
import { setTotalItems } from "../../store/cartSlice";
import DeleteIcon from "../../assets/icons/Delete.svg";

const Cart = () => {
  const [items, setItems] = useState<Book[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCart = async () => {
      try {
        const data = await cartApi.getCart();
        setItems(data.items);
        setTotalPrice(data.totalPrice);
      } catch (e) {
        console.error("Failed to load cart", e);
      }
    };
    loadCart();
  }, [dispatch]);

  const handleQuantityChange = async (bookId: number, quantity: number) => {
    try {
      await cartApi.updateQuantity(bookId, quantity);

      const data = await cartApi.getCart();
      setItems(data.items);
      setTotalPrice(data.totalPrice);
      dispatch(setTotalItems(data.totalItems));
    } catch (e) {
      console.error("Failed to update quantity", e);
    }
  };

  const removeFromCartHandler = async (bookId: number) => {
    try {
      await cartApi.removeFromCart(bookId);
      const data = await cartApi.getCart();
      setItems(data.items);
      setTotalPrice(data.totalPrice);
      dispatch(setTotalItems(data.totalItems));
    } catch (e) {
      console.error("Failed to remove item", e);
    }
  };

  if (items.length === 0) return <div>Your cart is empty</div>;

  return (
    <CartWrapper>
      {items.map((book) => (
        <BookItemContainer key={book.id}>
          <BookCover src={book.cover} />
          <BookDataWrapper>
            <BookTitle>{book.name}</BookTitle>
            <BookAuthorName>{book.author}</BookAuthorName>
            <QuantityWrapper>
              <QuantityButton
                onClick={() =>
                  handleQuantityChange(+book.id, (book.quantity ?? 1) + 1)
                }
              >
                <span>+</span>
              </QuantityButton>
              <span>{book.quantity ?? 1}</span>
              <QuantityButton
                onClick={() =>
                  handleQuantityChange(
                    +book.id,
                    Math.max((book.quantity ?? 1) - 1, 0),
                  )
                }
              >
                <span>-</span>
              </QuantityButton>
              <img
                src={DeleteIcon}
                onClick={() => removeFromCartHandler(+book.id)}
              />
            </QuantityWrapper>
            <ItemPrice>€ {book.price} EUR</ItemPrice>
          </BookDataWrapper>
        </BookItemContainer>
      ))}

      <TotalPrice>
        Total: <strong>{totalPrice}€</strong>
      </TotalPrice>

      <CheckoutWrapper>
        <BaseButton
          option="secondary"
          sx={{
            "& .MuiTouchRipple-root span": {
              backgroundColor: "rgba(70, 180, 190, 0.636)",
            },
          }}
          onClick={async () => {
            for (const book of items) {
              await cartApi.updateQuantity(+book.id, 0);
            }
            const data = await cartApi.getCart();
            setItems(data.items);
            setTotalPrice(data.totalPrice);
          }}
        >
          Clear Cart
        </BaseButton>
        <BaseButton>Checkout</BaseButton>
      </CheckoutWrapper>
    </CartWrapper>
  );
};

export default Cart;
