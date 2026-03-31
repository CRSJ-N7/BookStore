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
import type { Comment, User } from "../../../types/types";
import { BaseHeader, StyledInput } from "../../../shared/styles/styles";
import { BaseButton } from "../../../shared/ui/Button/Button.styles";

type Props = {
  comments: Comment[];
  user: User | null;
  newComment: string;
  setNewComment: (value: string) => void;
  onSubmit: () => void;
};

const CommentsSection = ({
  comments,
  user,
  newComment,
  setNewComment,
  onSubmit,
}: Props) => {
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
          <BaseButton onClick={onSubmit}>Post a comment</BaseButton>
        </CommentInputWrapper>
      )}
    </CommentsWrapper>
  );
};

export default CommentsSection;
