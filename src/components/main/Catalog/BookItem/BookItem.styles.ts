import styled from "@emotion/styled";

export const BookItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 305px;
  position: relative;
`;

export const BookCover = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 305/448;
  border-radius: 4px;
  margin-bottom: 30px;
  cursor: pointer;
  transition:
    0.4s ease transform,
    0.7s ease box-shadow;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 25px 25px 0px #bfbfbfff;
  }
`;

export const FavouritesIcon = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 48px;
  height: 48px;
  z-index: 2;
  cursor: pointer;
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

export const Price = styled.p`
  color: #f0f4ef;
  letter-spacing: 0.75px;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
`;
