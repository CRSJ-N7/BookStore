import styled from "styled-components";

export const BookItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  max-width: 305px;
`;

export const BookCover = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 305/448;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const BookTitle = styled.h3`
  width: 100%;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  margin: 0 0 5px 0;
`;

export const BookAuthor = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 15px 0;
`;

export const BookPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  margin: 8px 0;
`;
