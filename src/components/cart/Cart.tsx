import { BaseButton } from "../../shared/ui/Button/Button.styles";
import { BooksWrapper, CartWrapper, CheckoutWrapper } from "./Cart.styles";

const Cart = () => {
  const booksArray = [1, 2, 3, 4, 5, 6, 7, 23];

  return (
    <CartWrapper>
      <BooksWrapper>
        {booksArray.map((element) => {
          return (
            <>
              <div>{element}</div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <button>+</button>
                <p>1</p>
                <button>-</button>
              </div>
            </>
          );
        })}
      </BooksWrapper>
      <CheckoutWrapper>
        <BaseButton>Continue shopping</BaseButton>
        <BaseButton>Checkout</BaseButton>
      </CheckoutWrapper>
      <div>
        Total:{" "}
        {booksArray.reduce((acc, item) => {
          return (acc += item);
        }, 0)}{" "}
      </div>
    </CartWrapper>
  );
};

export default Cart;
