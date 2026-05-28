import { useEffect, useState } from "react";

import commentApi from "../../../api/commentApi";
import { useAppSelector } from "../../../hooks/hooks";

import {
  CommentsWrapper,
  CommentInputWrapper,
  CommentItem,
  CommentUserProfile,
  CommentUserName,
  CommentUserText,
  CommentUserProfilePlaceholder,
  CommentsDate,
  CommentsItemContainer,
  CommentsContainer,
} from "../BookProfile.style";

import getDate from "../../../utilities/getDate";
import type { Comment } from "../../../types/types";
import { BaseHeader, StyledInput } from "../../../shared/styles/styles";
import Button from "../../../shared/ui/Button/Button";
import { ButtonWrapper } from "../../../shared/ui/Info/InfoContainer.styles";
import toastError from "../../../utilities/errorHandler";
import { getSocket } from "../../../utilities/socket";

type Props = {
  bookId: number;
};

const CommentsSection = ({ bookId }: Props) => {
  const user = useAppSelector((state) => state.auth.user);

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await commentApi.getComments(bookId.toString());
        setComments(data);
      } catch {
        toastError("Failed to load comments");
      }
    };

    loadComments();
  }, [bookId]);

  useEffect(() => {
    const socket = getSocket();

    socket.emit("join_book", bookId);

    socket.on("new_comment", (comment: Comment) => {
      setComments((prev) => {
        const exists = prev.some((c) => c.id === comment.id);
        if (exists) return prev;
        return [...prev, comment];
      });
    });

    return () => {
      socket.emit("leave_book", bookId);
      socket.off("new_comment");
    };
  }, [bookId]);

  const handleSubmit = async () => {
    if (!user || !newComment.trim()) return;

    try {
      const created = await commentApi.createComment(bookId, newComment);

      setComments((prev) => {
        const exists = prev.some((c) => c.id === created.id);
        if (exists) return prev;
        return [...prev, created];
      });
      setNewComment("");
    } catch (error) {
      toastError(error);
    }
  };

  return (
    <CommentsWrapper>
      <BaseHeader>Comments</BaseHeader>

      {comments.map((item) => (
        <CommentsContainer>
          <CommentsItemContainer key={item.id}>
            {item.user.avatar ? (
              <CommentUserProfile src={item.user.avatar} />
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
            </CommentItem>
          </CommentsItemContainer>
          <CommentUserText>{item.text}</CommentUserText>
        </CommentsContainer>
      ))}

      {user && (
        <CommentInputWrapper>
          <StyledInput
            value={newComment}
            as="textarea"
            variant="comment"
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share a comment"
          />
          <ButtonWrapper>
            <Button onClick={handleSubmit}>Post a comment</Button>
          </ButtonWrapper>
        </CommentInputWrapper>
      )}
    </CommentsWrapper>
  );
};

export default CommentsSection;
