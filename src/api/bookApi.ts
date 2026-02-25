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

const getBooks = async () => {
  const response = await axios.get<BookData>("http://localhost:3000/books/");

  return response.data;
};

export default { uploadBook, getBooks };
