import styled from "@emotion/styled";

export const CatalogWrapper = styled.div`
  margin-top: 110px;
`;

export const CatalogBooksWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const CatalogNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: 80px;
  gap: 20px;

  @media screen and (max-width: 834px) {
    flex-direction: column;
    gap: 25px;
    margin-inline: 16px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const BooksWrapper = styled.div`
  margin-top: 38px;
  margin-inline: 80px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 21px;

  @media (max-width: 834px) {
    margin-inline: 16px;
    gap: 25px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
