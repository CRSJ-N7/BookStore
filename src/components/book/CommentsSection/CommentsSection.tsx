import {
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
} from "../BookProfile.style";

import getDate from "../../../utilities/getDate";
import type { Comment, User } from "../../../types/types";

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
      <h2>Comments</h2>

      {user && (
        <CommentInputWrapper>
          <CommentInput
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Leave a comment..."
          />
          <CommentButton onClick={onSubmit}>Send</CommentButton>
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
  );
};

export default CommentsSection;
