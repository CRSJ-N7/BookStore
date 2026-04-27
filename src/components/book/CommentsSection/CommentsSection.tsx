import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import commentApi from "../../../api/commentApi";
import { useAppSelector } from "../../../hooks/hooks";

import {
  CommentsWrapper,
  CommentInputWrapper,
  CommentItem,
  CommentUserProfile,
  CommentContainer,
  CommentUserName,
  CommentUserText,
  CommentUserProfilePlaceholder,
  CommentsDate,
} from "../BookProfile.style";

import getDate from "../../../utilities/getDate";
import type { Comment } from "../../../types/types";
import { BaseHeader, StyledInput } from "../../../shared/styles/styles";
import { BaseButton } from "../../../shared/ui/Button/Button.styles";

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
      } catch (e) {
        console.error(e);
      }
    };

    loadComments();
  }, [bookId]);

  const handleSubmit = async () => {
    if (!user || !newComment.trim()) return;

    try {
      const created = await commentApi.createComment(
        bookId,
        newComment
      );

      setComments((prev) => [...prev, created]);
      setNewComment("");
    } catch (e) {
      toast.error(`Error: ${e}`);
    }
  };

  return (
    <CommentsWrapper>
      <BaseHeader>Comments</BaseHeader>

      {comments.map((item) => (
        <CommentContainer key={item.id}>
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
            <CommentUserText>{item.text}</CommentUserText>
          </CommentItem>
        </CommentContainer>
      ))}

      {user && (
        <CommentInputWrapper>
          <StyledInput
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share a comment"
          />
          <BaseButton onClick={handleSubmit}>
            Post a comment
          </BaseButton>
        </CommentInputWrapper>
      )}
    </CommentsWrapper>
  );
};

export default CommentsSection;