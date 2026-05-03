import styled from "@emotion/styled";
import { BookCover } from "../BookProfile.style";

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const RateArrow = styled.img`
  width: 24px;
  height: 24px;
`;

export const StyledBookCover = styled(BookCover)`
  width: 522px;
  height: 779px;

  @media screen and (max-width: 834px) {
    width: 391px;
    height: 584px;
  }

  @media screen and (max-width: 420px) {
    width: 135px;
    height: 202px;
  }
`;

export const TopBookDetailsSection = styled.div`
  display: flex;
  flex-direction: row;
`;
