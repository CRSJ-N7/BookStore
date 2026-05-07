import styled from "@emotion/styled";

export const StarRatingWrapper = styled.div<{
  noMargin?: boolean;
  bookProfile?: boolean;
}>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "30px")};
  ${({ bookProfile }) =>
    bookProfile &&
    `
    gap: 15px;

     @media screen and (max-width: 380px) {
flex-direction: column;
align-items: baseline;
gap: 5px;
}
    `}
`;

export const StarsContainer = styled.div<{ bookProfile?: boolean }>`
  display: flex;
  width: 85%;
  justify-content: space-between;
  ${({ bookProfile }) =>
    bookProfile &&
    `
    gap: 15px;

   @media screen and (max-width: 380px) {
   gap: 5px;
   order: 2;
   }

    `}
`;

export const Star = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media screen and (max-width: 930px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 600px) {
    width: 18px;
    height: 18px;
  }
`;

export const Rating = styled.p<{ bookProfile?: boolean }>`
  margin-left: auto;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.palette.secondary.dark};
  ${({ bookProfile }) =>
    bookProfile &&
    `
    gap: 15px;

    `};

  @media screen and (max-width: 430px) {
    font-size: 12px;

    ${({ bookProfile }) => bookProfile && ` margin-left: unset;`}
  }
  @media screen and (max-width: 920px) {
    font-size: 16px;
  }
`;
