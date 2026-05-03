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
      width: 100%;
      max-width: 50%;
    `}
`;

export const StarsContainer = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
`;

export const Star = styled.img<{ filled?: boolean }>`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Rating = styled.p`
  margin-left: auto;
  width: 24px;
  height: 24px;
  font-family: "Poppins", sans-serif;
  color: #b9bac3;
`;
