import { BaseHeader } from "../../../shared/styles/styles";
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
import { useEffect, useState } from "react";
import bookApi from "../../../api/bookApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setCurrentBook } from "../../../store/bookSlice";
import Pagination from "./Pagination/Pagination";
import { getBooksThunk } from "../../../store/getBookThunks";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

const Catalog = () => {
  const books = useAppSelector((state) => state.books.books);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState<number[]>([]);

  useEffect(() => {
    const loadFavourites = async () => {
      try {
        const books = await bookApi.getFavourites();

        setFavourites(books.map((b) => b.id));
      } catch (e) {
        console.error(e);
      }
    };

    loadFavourites();
  }, []);

  const toggleFavourite = async (bookId: number) => {
    try {
      await bookApi.toggleFavourite(bookId);

      setFavourites((prev) =>
        prev.includes(bookId)
          ? prev.filter((id) => id !== bookId)
          : [...prev, bookId],
      );
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    const params = Object.fromEntries(new URLSearchParams(searchParams));

    dispatch(getBooksThunk(params));
  }, [dispatch, searchParams]);

  const clickHandler = async (id: number) => {
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
              isFavourite={favourites.includes(+book.id)}
              toggleFavourite={toggleFavourite}
            />
          ))}
        </BooksWrapper>
      </CatalogBooksWrapper>
      <Pagination />
    </CatalogWrapper>
  );
};

export default Catalog;
