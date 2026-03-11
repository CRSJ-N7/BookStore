import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { RootState } from "../../store/store";
import { setCurrentBook } from "../../store/bookSlice";
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
  PriceButton,
  NotAvailableButton,
  CommentsWrapper,
  CommentInputWrapper,
  CommentInput,
  CommentButton,
  CommentItem,
} from "./BookProfile.style";
import StarRating from "../main/Catalog/BookItem/StarRating/StarRating";
import commentApi from "../../api/commentApi";

type Comment = {
  id: number;
  text: string;
  user: {
    id: string;
    name: string;
  };
};

const BookProfile = () => {
  const book = useSelector((state: RootState) => state.books.currentBook);
  const user = useSelector((state: RootState) => state.auth.user);
  const { id } = useParams();
  const dispatch = useDispatch();

  const [rating, setRating] = useState<number>(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const loadBook = async () => {
      if (!id) return;

      try {
        const loadedBook = await bookApi.getBook(id);
        dispatch(setCurrentBook(loadedBook));
        setRating(loadedBook.avgRating ?? 0);

        const bookComments = await commentApi.getComments(+id);
        setComments(bookComments);
        console.log(bookComments);
      } catch (e) {
        console.error(e);
      }
    };

    loadBook();
  }, [id, dispatch]);

  const handleRate = async (value: number) => {
    if (!user) {
      alert("Login first");
      return;
    }
    try {
      const data = await bookApi.rateBook(+book!.id, value);
      setRating(data.avgRating ?? 0);
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
        <BookCover
          src={`http://localhost:3000/public/${book.cover}`}
          alt={book.name}
        />
      </CoverWrapper>

      <InfoWrapper>
        <BookTitle>{book.name}</BookTitle>
        <BookAuthor>{book.author}</BookAuthor>

        <RatingWrapper>
          <StarRating rating={rating} onRate={handleRate} />
          <span>{rating.toFixed(1)}</span>
        </RatingWrapper>

        <Description>{book.description}</Description>

        <ButtonsWrapper>
          <NotAvailableButton>Not Available</NotAvailableButton>
          <PriceButton>{book.price}€</PriceButton>
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

          {comments.map((c) => (
            <CommentItem key={c.id}>
              <strong>{c.user.name}</strong>: {c.text}
            </CommentItem>
          ))}
        </CommentsWrapper>
      </InfoWrapper>
    </ProfileWrapper>
  );
};

export default BookProfile;
