import { api } from "./api";

type UploadBookData = {
  author: string;
  cover: string;
  description: string;
  genre: string;
  name: string;
  price: number;
};

const uploadBook = async (data: UploadBookData) => {
  const response = await api.post<UploadBookData>("/books/shoot", data);

  return response.data;
};

export default { uploadBook };
