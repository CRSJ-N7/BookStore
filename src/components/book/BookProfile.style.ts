import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
`;

export const TopSection = styled.div`
  display: flex;
  max-width: 400px;
  gap: 128px;
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

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
  color: #344966;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const CommentsWrapper = styled.div`
  max-width: 727px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  gap: 8px;
`;

export const CommentInput = styled.input`
  padding: 8px;
  font-size: 14px;
`;

export const CommentButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  max-width: 150px;
`;

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 6px;
  background-color: #f5f5f5;
  font-size: 14px;
`;

export const CommentUserProfile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 60%;
`;

export const CommentUserProfilePlaceholder = styled.span`
  width: 60px;
  height: 60px;
  border-radius: 60%;
  outline: 1px solid green;
  align-content: center;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
`;

export const CommentContainer = styled.div`
  display: flex;
  background: #f0f4ef;
  border-radius: 12px;
  padding: 15px;
  gap: 15px;
`;

export const CommentUserName = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.75px;
  color: #0d1821;
`;

export const CommentUserText = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.75px;
  color: #344966;
  margin-top: 20px;
`;

export const CommentsDate = styled.div`
  color: #b9bac3;
  letter-spacing: 0.75px;
  font-size: 12px;
`;
