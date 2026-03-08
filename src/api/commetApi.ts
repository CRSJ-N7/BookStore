import { api } from "./api";

const getComments = async (id: number) => {
  const response = await api.get(`/comments/${id}`);
  return response.data;
};

const createComment = async (bookId: number, text: string) => {
  const response = await api.post("/comments", {
    bookId,
    text,
  });

  return response.data;
};

export default {
  getComments,
  createComment,
};
