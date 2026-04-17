import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Comment = {
  id: string;
  text: string;
  userName: string;
  bookId: string;
  createdAt: string;
};

type CommentState = {
  comments: Comment[];
};

const initialState: CommentState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<Comment[]>) {
      state.comments = action.payload;
    },

    addComment(state, action: PayloadAction<Comment>) {
      state.comments.push(action.payload);
    },

    removeComment(state, action: PayloadAction<null>) {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload,
      );
    },
  },
});

export const { setComments, addComment, removeComment } = commentsSlice.actions;

export default commentsSlice.reducer;
