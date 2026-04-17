import styled from "styled-components";

export const CartWrapper = styled.div`
  margin: 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BookTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 700;
`;

export const BookAuthorName = styled.div`
  font-family: "Poppins", sans-serif;
  margin-top: 5px;
  font-size: 24px;
  font-weight: 400;
`;

export const BookDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  height: 100%;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  max-width: 196px;

  p {
    margin: 0;
    width: 24px;
    text-align: center;
  }

  img {
    margin-left: 50px;
    cursor: pointer;
  }

  span {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    line-height: 0.75px;
    font-weight: 600;
  }
`;

export const QuantityButton = styled.button`
  border-radius: 50%;
  background-color: #f0f4ef;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  color: #0d1821;
`;

export const CheckoutWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const BookItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const BookCover = styled.img`
  width: 197px;
  height: 289px;
  cursor: pointer;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TotalPrice = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 36px;
`;

export const ItemPrice = styled.div`
  color: #0d1821;
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 400;
  margin-top: 50px;
`;
