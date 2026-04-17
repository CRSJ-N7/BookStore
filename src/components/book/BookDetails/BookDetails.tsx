import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import bookApi from "../../../api/bookApi";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

import {
  CoverWrapper,
  BookCover,
  InfoWrapper,
  BookTitle,
  BookAuthor,
  Description,
  ButtonsWrapper,
} from "../BookProfile.style";

import Arrow from "../../../assets/icons/RateArrow.svg";
import StarRating from "../../main/Catalog/BookItem/StarRating/StarRating";
import { BaseButton } from "../../../shared/ui/Button/Button.styles";
import { BaseParagraph, FlexWrapper } from "../../../shared/styles/styles";
import { RateArrow, RatingWrapper } from "./BookDetails.styles";

import type { Book } from "../../../types/types";
import cartApi from "../../../api/cartApi";
import { setCart } from "../../../store/cartSlice";

type Props = {
  bookId: number;
};

const BookDetails = ({ bookId }: Props) => {
  const user = useAppSelector((state) => state.auth.user);
  const [book, setBook] = useState<Book | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadBook = async () => {
      try {
        const data = await bookApi.getBook(bookId);
        setBook(data);
      } catch (e) {
        console.error(e);
      }
    };

    loadBook();
  }, [bookId]);

  const handleRate = async (value: number) => {
    if (!user || !book) {
      toast.error("You have to login first");
      return;
    }

    try {
      const updatedBook = await bookApi.rateBook(book.id, value);
      setBook(updatedBook);
    } catch (e) {
      console.error(e);
    }
  };

  const addToCartHandler = async (bookId: number) => {
    try {
      await cartApi.addToCart(bookId);
      const data = await cartApi.getCart();
      dispatch(setCart(data));

      toast.success(`Book ${book?.name} added to cart`);
    } catch (e) {
      toast.error(`Failed to add to cart, error: ${e}`);
    }
  };

  if (!book) return null;

  return (
    <>
      <CoverWrapper>
        <BookCover
          style={{ width: "522px", height: "779px" }}
          src={book.cover}
          alt={book.name}
        />
      </CoverWrapper>

      <InfoWrapper>
        <BookTitle>{book.name}</BookTitle>
        <BookAuthor>{book.author}</BookAuthor>

        <RatingWrapper>
          <StarRating
            rating={book.avgRating ?? 0}
            onRate={handleRate}
            noMargin
          />
          <RateArrow src={Arrow} />
          <BaseParagraph style={{ color: "#B9BAC3", fontSize: "16px" }}>
            Rate this book
          </BaseParagraph>
        </RatingWrapper>

        <BookAuthor>Description</BookAuthor>
        <Description>{book.description}</Description>

        <ButtonsWrapper>
          <FlexWrapper variant="column">
            <BaseParagraph fontSize="16px">Paperback</BaseParagraph>
            <BaseButton available={false}>Not Available</BaseButton>
          </FlexWrapper>

          <FlexWrapper variant="column">
            <BaseParagraph fontSize="16px">Hardcover</BaseParagraph>
            <BaseButton onClick={() => addToCartHandler(book.id)}>
              {book.price}€
            </BaseButton>
          </FlexWrapper>
        </ButtonsWrapper>
      </InfoWrapper>
    </>
  );
};

export default BookDetails;
