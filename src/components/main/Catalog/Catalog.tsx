import { useSelector } from "react-redux";
import { BaseHeader } from "../../../shared/styles/styles";
import type { RootState } from "../../../store/store";
// import GenreSelect from "./catalog-filters/GenreSelect";
// import PriceSlider from "./catalog-filters/PriceSlider";
// import SortSelect from "./catalog-filters/SortSelect";
import { BooksWrapper, CatalogWrapper } from "./Catalog.styles";
import BookItem from "./BookItem/BookItem";

const Catalog = () => {
  const books = useSelector((state: RootState) => state.books.books);
  console.log(books);

  return (
    <CatalogWrapper>
      <BaseHeader>Catalog</BaseHeader>
      {/* <CatalogNav>
        <GenreSelect />
        <SortSelect />
        <PriceSlider />
      </CatalogNav> */}
      <BooksWrapper>
        {books?.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </BooksWrapper>
    </CatalogWrapper>
  );
};

export default Catalog;
