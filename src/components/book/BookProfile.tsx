import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import bookApi from "../../api/bookApi";
import commentApi from "../../api/commentApi";

import { ProfileWrapper, TopSection } from "./BookProfile.style";

import BookDetails from "./BookDetails/BookDetails";
import CommentsSection from "./CommentsSection/CommentsSection";

import type { Book, Comment } from "../../types/types";
import { useAppSelector } from "../../hooks/hooks";
import { toast } from "react-toastify";

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
      toast.error("You have to login first");
      return;
    }

    try {
      const data = await bookApi.rateBook(book.id, value);

      setBook((prev) =>
        prev
          ? {
              ...prev,
              avgRating: data.avgRating ?? 0,
            }
          : prev,
      );
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
      toast.error(`Error: ${e}`);
    }
  };

  if (!book) return null;

  return (
    <ProfileWrapper>
      <TopSection>
        <BookDetails book={book} onRate={handleRate} />
      </TopSection>

      <CommentsSection
        comments={comments}
        user={user}
        newComment={newComment}
        setNewComment={setNewComment}
        onSubmit={handleCommentSubmit}
      />
    </ProfileWrapper>
  );
};

export default BookProfile;
