import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useEffect } from "react";
import bookApi from "../../api/bookApi";
import { useParams } from "react-router-dom";
import { setCurrentBook } from "../../store/bookSlice";

const BookProfile = () => {
  const book = useSelector((state: RootState) => state.books.currentBook);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const loadBook = async () => {
      if (!id || book) return;
      try {
        const loadedBook = await bookApi.getBook(id);
        dispatch(setCurrentBook(loadedBook));
      } catch (e) {
        console.log(e);
      }
    };

    loadBook();
  }, []);

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
