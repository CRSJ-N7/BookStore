import styled from "@emotion/styled";

export const CatalogWrapper = styled.div`
  margin-top: 110px;
  @media screen and (max-width: 900px) {
    margin-top: 25px;
  }
`;

export const CatalogBooksWrapper = styled.div`
  display: flex;
  margin-top: 30px;

  @media screen and (max-width: 420px) {
    margin-top: unset;
  }
`;

export const CatalogNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: 80px;
  gap: 20px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 25px;
    margin-inline: 16px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    max-width: 300px;
    align-items: unset;
  }
`;

export const BooksWrapper = styled.div`
  margin-top: 38px;
  margin-inline: 80px;
  width: 100%;
  font-size: 20px;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 21px;

  @media (max-width: 834px) {
    margin-inline: 16px;
    gap: 25px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    font-size: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
