import styled from "styled-components";

export const CartWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BookTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 500;
`;

export const BookAuthorName = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 400;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    width: 24px;
    height: 24px;
    border: none;
    background-color: #2c3e50;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
  }

  p {
    margin: 0;
    width: 24px;
    text-align: center;
  }
`;

export const CheckoutWrapper = styled.div`
  display: flex;
  gap: 16px;

  button {
    flex: 1;
  }
`;

export const BookItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
