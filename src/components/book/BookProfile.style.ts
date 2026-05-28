import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-inline: 80px;

  @media screen and (max-width: 834px) {
    margin-inline: 16px;
  }
`;

export const CoverWrapper = styled.div`
  grid-area: cover;
  min-width: 0;
`;

export const BookCover = styled.img`
  width: 100%;
  height: 100%;
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
  font-size: 40px;

  @media screen and (max-width: 830px) {
    font-size: 32px;
  }

  @media screen and (max-width: 430px) {
    font-size: 18px;
  }
`;

// export const BookAuthor = styled.h3`
//   margin: 0;
//   font-size: 24px;
//   color: ${({ theme }) => theme.palette.primary.main};

//   @media screen and (max-width: 830px) {
//     font-size: 20px;
//   }

//   @media screen and (max-width: 430px) {
//     font-size: 12px;
//   }
// `;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.palette.primary.main};
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 14px;
  display: flex;
  gap: 16px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CommentsWrapper = styled.div`
  max-width: 727px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  gap: 8px;

  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
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
  justify-content: center;
  padding: 20px;
  border-radius: 6px;
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
  outline: 1.5px solid ${({ theme }) => theme.palette.secondary.dark};
  align-content: center;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.primary.light};
  border-radius: 16px;
  padding: 15px;
`;

export const CommentsItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentUserName = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.75px;
  color: ${({ theme }) => theme.palette.primary.dark};
`;

export const CommentUserText = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.75px;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-left: 80px;
  /* margin-top: 20px; */

  @media screen and (max-width: 480px) {
    margin-left: 10px;
    /* margin-top: 15px; */
  }
`;

export const CommentsDate = styled.div`
  color: ${({ theme }) => theme.palette.info.main};
  letter-spacing: 0.75px;
  font-size: 12px;
`;
