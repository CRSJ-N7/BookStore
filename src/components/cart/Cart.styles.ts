import styled from "@emotion/styled";

export const CartWrapper = styled.div`
  margin: 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 840px) {
    margin: 16px;
  }
`;

export const BookTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: clamp(18px, 2vw, 40px);
  word-break: break-word;
  font-weight: 700;
`;

export const BookAuthorName = styled.div`
  font-family: "Poppins", sans-serif;
  margin-top: 5px;
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

  @media screen and (max-width: 420px) {
    gap: 10px;
  }

  p {
    margin: 0;
    width: 24px;
    text-align: center;
  }

  img {
    margin-left: 50px;
    cursor: pointer;

    @media screen and (max-width: 840px) {
      margin-left: auto;
    }
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
  background-color: ${({ theme }) => theme.palette.primary.light};
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  color: #0d1821;
`;

export const CheckoutWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BookItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const BookCover = styled.img`
  width: 197px;
  height: 289px;
  cursor: pointer;

  @media (max-width: 834px) {
    width: 255px;
    height: 375px;
  }

  @media (max-width: 480px) {
    width: 135px;
    height: 202px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TotalPriceWrapper = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const TotalPrice = styled.p`
  font-size: clamp(18px, 2vw, 36px);
  font-weight: 400;
`;

export const ItemPrice = styled.div`
  color: ${({ theme }) => theme.palette.primary.dark};
  font-family: "Poppins", sans-serif;
  font-size: clamp(18px, 2vw, 36px);
  font-weight: 400;
  margin-top: 50px;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 62px;
  margin: 80px;

  @media (max-width: 840px) {
    margin: 16px;
    gap: 24px;
  }

  @media (max-width: 531px) {
    flex-direction: column-reverse;
  }
`;

export const EmptyCartInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 15px;

  & > :last-child {
    margin-top: 30px;
  }

  @media screen and (max-width: 531px) {
    width: 100%;
    align-self: flex-start;
  }
`;

export const CartImage = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  object-fit: contain;
  flex: 1;
  min-width: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 531px) {
    justify-content: center;
  }
`;
