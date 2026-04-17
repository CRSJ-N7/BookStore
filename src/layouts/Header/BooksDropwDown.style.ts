import styled from "@emotion/styled";

export const SearchBooksWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  flex-direction: column;
  gap: 20px;
  left: 12px;
  top: 70px;
  z-index: 3;
  max-width: 603px;
  width: 100%;
  padding: 15px;
  background: linear-gradient(180deg, #fafafa 0%, #f0f0f0 100%);
  border: 1px solid #e5e5e5;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
`;

export const SearchBookContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SearchBookCover = styled.img`
  width: 75px;
  height: 100px;
  cursor: pointer;
`;

export const SearchBookName = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
`;
