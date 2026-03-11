import { useEffect, useState } from "react";
import { BaseButton } from "../../shared/ui/Button/Button.styles";
import cartApi from "../../api/cartApi";
import {
  CartWrapper,
  BookTitle,
  BookAuthorName,
  BookItemContainer,
} from "./Cart.styles";
import type { Book } from "../../types/types";

const Cart = () => {
  const [items, setItems] = useState<(Book & { quantity: number })[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

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
  }, []);

  const handleQuantityChange = async (bookId: number, quantity: number) => {
    try {
      await cartApi.updateQuantity(bookId, quantity);

      const data = await cartApi.getCart();
      setItems(data.items);
      setTotalPrice(data.totalPrice);
    } catch (e) {
      console.error("Failed to update quantity", e);
    }
  };

  if (items.length === 0) return <div>Your cart is empty</div>;

  return (
    <CartWrapper>
      {items.map((book) => (
        <BookItemContainer key={book.id}>
          <img
            src={`http://localhost:3000/public/${book.cover}`}
            style={{ width: "197px", height: "289px" }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <BookTitle>{book.name}</BookTitle>
            <BookAuthorName>{book.author}</BookAuthorName>
            <button
              onClick={() =>
                handleQuantityChange(+book.id, (book.quantity ?? 1) + 1)
              }
            >
              +
            </button>
            <span>{book.quantity ?? 1}</span>
            <button
              onClick={() =>
                handleQuantityChange(
                  +book.id,
                  Math.max((book.quantity ?? 1) - 1, 0),
                )
              }
            >
              -
            </button>
            {book.price}€
          </div>
        </BookItemContainer>
      ))}

      <div style={{ marginTop: "16px" }}>
        <strong>Total: {totalPrice}€</strong>
      </div>

      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        <BaseButton
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
      </div>
    </CartWrapper>
  );
};

export default Cart;
