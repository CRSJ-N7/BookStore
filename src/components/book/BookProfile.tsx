import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import bookApi from "../../api/bookApi";
import { useEffect } from "react";

const BookProfile = () => {
  const book = useSelector((state: RootState) => state.books.currentBook);

  useEffect(() => {
    if (book) {
      await bookApi.getBook(book.id);
    }
  }, [book]);

  if (book) {
    return (
      <div>
        <img src={`http://localhost:3000/public/${book.cover}`} />
        <div>{book.id}</div>
        <div>{book.name}</div>
        <div>{book.author}</div>
        <div>{book.description}</div>
        <div>{book.price}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default BookProfile;
