import { useRef, useState } from "react";
import { AdminWrapper, BookUploader } from "./Admin.styles";
import photoUploader from "../../assets/icons/profile.svg";
import { StyledInput } from "../../shared/styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import bookApi from "../../api/bookApi";
import { setBook } from "../../store/bookSlice";
import type { RootState } from "../../store/store";

const Admin = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [bookCover, setBookCover] = useState<null | string>();
  const books = useSelector((state: RootState) => state.books.books);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = async () => {
      if (!reader.result || typeof reader.result !== "string") return;

      const base64 = reader.result;

      setBookCover(base64);
    };

    reader.readAsDataURL(file);
  };

  const formik = useFormik({
    initialValues: {
      description: "",
      author: "",
      price: 0,
      genre: "",
      name: "",
      cover: bookCover,
    },

    validationSchema: Yup.object({}),

    onSubmit: async (values) => {
      console.log("submit нажат");
      console.log(bookCover);
      try {
        const newBook = await bookApi.uploadBook({
          description: values.description || "coming soon",
          author: values.author,
          price: values.price,
          genre: values.genre || "coming soon",
          name: values.name,
          cover: bookCover as string,
        });
        console.log(newBook);

        dispatch(setBook(newBook));
        console.log(books);
      } catch (e) {
        console.log(`Error:`, e);
      }
    },
  });

  return (
    <AdminWrapper>
      <form onSubmit={formik.handleSubmit}>
        <BookUploader src={photoUploader} onClick={handleClick} />
        <input
          type="file"
          hidden
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        {bookCover ? <img src={bookCover} /> : null}
        <StyledInput
          name="name"
          placeholder="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <StyledInput
          name="description"
          placeholder="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <StyledInput
          name="author"
          placeholder="author"
          value={formik.values.author}
          onChange={formik.handleChange}
        />
        <StyledInput
          name="genre"
          placeholder="genre"
          value={formik.values.genre}
          onChange={formik.handleChange}
        />
        <StyledInput
          name="price"
          placeholder="price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        <button type="submit">SHOOT!</button>
      </form>
    </AdminWrapper>
  );
};

export default Admin;
