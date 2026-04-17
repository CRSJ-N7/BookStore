import styled from "styled-components";

export const StarRatingWrapper = styled.div<{ noMargin?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "30px")};
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const Star = styled.img<{ filled?: boolean }>`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Rating = styled.p`
  margin-left: 35px;
  width: 24px;
  height: 24px;
  font-family: "Poppins", sans-serif;
  color: #b9bac3;
`;
