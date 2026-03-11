import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 32px;
  padding: 24px;
  flex-wrap: wrap;
`;

export const CoverWrapper = styled.div`
  flex: 0 0 300px;
`;

export const BookCover = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BookTitle = styled.h1`
  margin: 0;
  font-size: 28px;
`;

export const BookAuthor = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #555;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const PriceButton = styled.button`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  background-color: #fff;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const NotAvailableButton = styled.button`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: not-allowed;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #eee;
`;

export const CommentsWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const CommentInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 14px;
`;

export const CommentButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
`;

export const CommentItem = styled.div`
  padding: 8px;
  border-radius: 6px;
  background-color: #f5f5f5;
  font-size: 14px;
`;
