import styled from "@emotion/styled";
import { BaseHeader } from "../shared/styles/styles";
import { BooksWrapper } from "../components/main/Catalog/Catalog.styles";

export const RecommendationsWrapper = styled.div`
  margin-top: 20px;
  margin-inline: 80px;

  @media screen and (max-width: 834px) {
    margin-inline: 16px;
  }
`;

export const StyledBooksWrapper = styled(BooksWrapper)`
  margin-inline: unset;

  @media screen and (max-width: 834px) {
    margin-inline: unset;
    margin-top: 10px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 15px;
  }
`;
export const StyledBaseHeader = styled(BaseHeader)`
  @media screen and (max-width: 834px) {
    font-size: 32px;
  }
  @media screen and (max-width: 420px) {
    font-size: 18px;
  }
`;
