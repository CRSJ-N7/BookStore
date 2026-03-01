import axios from "axios";

type BookData = {
  id?: string;
  author: string;
  cover: string;
  description: string;
  genre: string;
  name: string;
  price: number;
};

const uploadBook = async (data: BookData) => {
  console.log("Зашли в uploadBook");

  const response = await axios.post<BookData>(
    "http://localhost:3000/books/shoot",
    data,
  );
  console.log(response);
  return response.data;
};

const getBooks = async (params?: object) => {
  const response = await axios.get<BookData>("http://localhost:3000/books/", {
    params: { ...params },
  });

  return response.data;
};

const getGenres = async () => {
  const response = await axios.get("http://localhost:3000/books/genres");

  return response.data;
};

const getBook = async (id: string) => {
  const response = await axios.get(`http://localhost:3000/books/${id}`);

  return response.data;
};
export default { uploadBook, getBooks, getGenres, getBook };
