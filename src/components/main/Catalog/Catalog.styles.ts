import styled from "styled-components";

export const CatalogWrapper = styled.div`
  margin: 24px;
`;

export const CatalogNav = styled.div`
  float: right;
`;

export const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 305px));
  gap: 20px;
`;
