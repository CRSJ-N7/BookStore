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
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import { getBooksThunk } from "../../../store/getBookThunks";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { toast } from "react-toastify";

const Catalog = () => {
  const books = useAppSelector((state) => state.books.books);
  const user = useAppSelector((state) => state.auth.user);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const [favourites, setFavourites] = useState<number[]>([]);

  useEffect(() => {
    const loadFavourites = async () => {
      try {
        const books = await bookApi.getFavourites();

        setFavourites(books.map((book) => book.id));
      } catch (e) {
        toast.error(`Failed to load favourites, ${e}`);
      }
    };

    loadFavourites();
  }, []);

  const toggleFavourite = async (bookId: number) => {
    if (!user) {
      toast.info("You have to Log In first");
      return;
    }
    try {
      await bookApi.toggleFavourite(bookId);

      setFavourites((prev) =>
        prev.includes(bookId)
          ? prev.filter((id) => id !== bookId)
          : [...prev, bookId],
      );
    } catch (e) {
      toast.error(`Failed to toggle favourite, ${e}`);
    }
  };
  useEffect(() => {
    const params = Object.fromEntries(new URLSearchParams(searchParams));

    dispatch(getBooksThunk(params));
  }, [dispatch, searchParams]);

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
