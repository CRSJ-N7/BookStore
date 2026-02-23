import { useRef, useState } from "react";
import { AdminWrapper, BookUploader } from "./Admin.styles";
import photoUploader from "../../assets/icons/profile.svg";
import { StyledInput } from "../../shared/styles/styles";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const Admin = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [bookCover, setBookCover] = useState<null | string>();

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
      price: "",
    },

    validationSchema: Yup.object({}),

    onSubmit: async () => {
      console.log("sdfkdsf");
    },
  });

  return (
    <AdminWrapper>
      <BookUploader src={photoUploader} onClick={handleClick} />
      <input
        type="file"
        hidden
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      {bookCover ? <img src={bookCover} /> : null}
      <StyledInput placeholder="description" />
      <StyledInput placeholder="author" />
      <StyledInput placeholder="price" />
    </AdminWrapper>
  );
};

export default Admin;
