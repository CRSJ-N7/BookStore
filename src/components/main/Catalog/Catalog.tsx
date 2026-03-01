import { useDispatch, useSelector } from "react-redux";
import { BaseHeader } from "../../../shared/styles/styles";
import type { RootState } from "../../../store/store";
import GenreSelect from "./catalog-filters/GenreSelect";
import PriceSlider from "./catalog-filters/PriceSlider";
import SortSelect from "./catalog-filters/SortSelect";
import {
  BooksWrapper,
  CatalogNav,
  CatalogBooksWrapper,
  SelectWrapper,
  CatalogWrapper,
} from "./Catalog.styles";
import BookItem from "./BookItem/BookItem";
import { useEffect } from "react";
import bookApi from "../../../api/bookApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setBooks, setCurrentBook } from "../../../store/bookSlice";

const Catalog = () => {
  const books = useSelector((state: RootState) => state.books.books);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = Object.fromEntries(new URLSearchParams(searchParams));

    async function getBooksData() {
      const booksData = await bookApi.getBooks(params);
      dispatch(setBooks(booksData));
    }

    getBooksData();
  }, [searchParams]);

  const clickHandler = async (id: string) => {
    console.log(id);
    const book = await bookApi.getBook(id);
    dispatch(setCurrentBook(book));

    navigate(`/books/${id}`);
  };

  return (
    <CatalogWrapper>
      <CatalogNav>
        <BaseHeader>Catalog</BaseHeader>
        <SelectWrapper>
          <GenreSelect />
          <PriceSlider />
          <SortSelect />
        </SelectWrapper>
      </CatalogNav>

      <CatalogBooksWrapper>
        <BooksWrapper>
          {books?.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onClick={() => clickHandler(book.id)}
            />
          ))}
        </BooksWrapper>
      </CatalogBooksWrapper>
    </CatalogWrapper>
  );
};

export default Catalog;
