import styled from "@emotion/styled";
export const FavouritesContainer = styled.div`
  margin: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 840px) {
    margin: 16px;
  }
`;
export const FavouritesHeader = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.palette.primary.main};
`;
export const FavouritesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 750px;

  padding: 32px;
  border-radius: 16px;
  background: linear-gradient(180deg, #fafafa 0%, #f0f0f0 100%);
  border: 2px solid ${({ theme }) => theme.palette.primary.light};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 840px) {
    justify-content: center;
  }
`;
export const BookItemWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const StyledBookCover = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
`;

export const StyledBookTitle = styled.div`
  font-weight: 600;
  font-size: 14px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledBookAuthor = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.palette.primary.main};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledFavouriteIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;
