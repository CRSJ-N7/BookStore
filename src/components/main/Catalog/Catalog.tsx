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
import { useEffect, useState } from "react";
import bookApi from "../../../api/bookApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setBooks, setCurrentBook, setGenres } from "../../../store/bookSlice";

const Catalog = () => {
  const books = useSelector((state: RootState) => state.books.books);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
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

    async function getBooksData() {
      const booksData = await bookApi.getBooks(params);
      dispatch(setBooks(booksData.filteredBooks));

      const genresData = await bookApi.getGenres();
      dispatch(setGenres(genresData));
    }

    getBooksData();
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
    </CatalogWrapper>
  );
};

export default Catalog;
