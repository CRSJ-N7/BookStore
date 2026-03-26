import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookApi from "../../api/bookApi";

import {
  ProfileWrapper,
  CoverWrapper,
  BookCover,
  InfoWrapper,
  BookTitle,
  BookAuthor,
  RatingWrapper,
  Description,
  ButtonsWrapper,
  CommentsWrapper,
  CommentInputWrapper,
  CommentInput,
  CommentButton,
  CommentItem,
  CommentUserProfile,
  CommentContainer,
  CommentUserName,
  CommentUserText,
  CommentUserProfilePlaceholder,
  CommentsDate,
} from "./BookProfile.style";

import StarRating from "../main/Catalog/BookItem/StarRating/StarRating";
import commentApi from "../../api/commentApi";
import { BaseButton } from "../../shared/ui/Button/Button.styles";
import getDate from "../../utilities/getDate";
import { BaseParagraph } from "../../shared/styles/styles";
import type { Book, Comment } from "../../types/types";
import { useAppSelector } from "../../hooks/hooks";

const BookProfile = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { id } = useParams();

  const [book, setBook] = useState<Book | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const loadBookAndComments = async () => {
      if (!id) return;

      try {
        const [loadedBook, bookComments] = await Promise.all([
          bookApi.getBook(+id),
          commentApi.getComments(id),
        ]);

        setBook(loadedBook);
        setComments(bookComments);
      } catch (e) {
        console.error(e);
      }
    };

    loadBookAndComments();
  }, [id]);

  const handleRate = async (value: number) => {
    if (!user || !book) {
      alert("Login first");
      return;
    }

    try {
      const data = await bookApi.rateBook(book.id, value);

      setBook((prev) => {
        if (!prev) return prev;

        return {
          ...prev,
          avgRating: data.avgRating ?? 0,
        };
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleCommentSubmit = async () => {
    if (!user || !newComment.trim() || !id) return;

    try {
      const created = await commentApi.createComment(+id, newComment);

      setComments((prev) => [...prev, created]);
      setNewComment("");
    } catch (e) {
      console.error(e);
    }
  };

  if (!book) return null;

  return (
    <ProfileWrapper>
      <CoverWrapper>
        <BookCover src={book.cover} alt={book.name} />
      </CoverWrapper>

      <InfoWrapper>
        <BookTitle>{book.name}</BookTitle>
        <BookAuthor>{book.author}</BookAuthor>

        <RatingWrapper>
          <StarRating rating={book.avgRating ?? 0} onRate={handleRate} />
          <span>{(book.avgRating ?? 0).toFixed(1)}</span>
        </RatingWrapper>

        <Description>{book.description}</Description>

        <ButtonsWrapper>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <BaseParagraph>Paperback</BaseParagraph>
            <BaseButton available={false}>Not Available</BaseButton>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <BaseParagraph>Hardcover</BaseParagraph>
            <BaseButton>{book.price}€</BaseButton>
          </div>
        </ButtonsWrapper>

        <CommentsWrapper>
          <h2>Comments</h2>

          {user && (
            <CommentInputWrapper>
              <CommentInput
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Leave a comment..."
              />
              <CommentButton onClick={handleCommentSubmit}>Send</CommentButton>
            </CommentInputWrapper>
          )}

          {comments.map((item) => (
            <CommentContainer key={item.id}>
              {item.user.avatar ? (
                <CommentUserProfile
                  src={`http://localhost:3000/uploads/${item.user.avatar}`}
                />
              ) : (
                <CommentUserProfilePlaceholder>
                  {item.user.name?.charAt(0).toUpperCase() || "?"}
                </CommentUserProfilePlaceholder>
              )}

              <CommentItem>
                <CommentUserName>{item.user.name}</CommentUserName>
                <CommentsDate>
                  Left a comment {getDate(item.createdAt)}
                </CommentsDate>
                <CommentUserText>{item.text}</CommentUserText>
              </CommentItem>
            </CommentContainer>
          ))}
        </CommentsWrapper>
      </InfoWrapper>
    </ProfileWrapper>
  );
};

export default BookProfile;
