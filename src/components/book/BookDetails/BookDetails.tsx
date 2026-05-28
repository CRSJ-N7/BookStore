import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import bookApi from "../../../api/bookApi";
import cartApi from "../../../api/cartApi";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setCart } from "../../../store/cartSlice";

import Arrow from "../../../assets/icons/RateArrow.svg";
import StarRating from "../../main/Catalog/BookItem/StarRating/StarRating";

import Button from "../../../shared/ui/Button/Button";
import { BaseParagraph, FlexWrapper } from "../../../shared/styles/styles";

import {
  Wrapper,
  Cover,
  InfoTop,
  InfoBottom,
  Title,
  Author,
  Description,
  RatingWrapper,
  RateArrow,
  ButtonsWrapper,
  StyledBaseParagraph,
} from "./BookDetails.styles";

import type { Book } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import toastError from "../../../utilities/errorHandler";

type Props = {
  bookId: number;
};

const BookDetails = ({ bookId }: Props) => {
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    bookApi.getBook(bookId).then(setBook).catch();
  }, [bookId]);

  const handleRate = async (value: number) => {
    if (!user || !book) {
      navigate("/auth/login");
      toastError("You have to login first");
      return;
    }

    try {
      const updated = await bookApi.rateBook(book.id, value);
      setBook(updated);
    } catch (e) {
      toastError(e);
    }
  };

  const addToCartHandler = async () => {
    try {
      await cartApi.addToCart(bookId);
      const data = await cartApi.getCart();
      dispatch(setCart(data));
      toast.success(`Book ${book?.name} added to cart`);
    } catch (e) {
      toastError(e);
    }
  };

  if (!book) return null;

  return (
    <Wrapper>
      <Cover src={book.cover} alt={book.name} />

      <InfoTop>
        <Title>{book.name}</Title>
        <Author>{book.author}</Author>

        <RatingWrapper>
          <StarRating
            rating={book.avgRating ?? 0}
            onRate={handleRate}
            noMargin
            bookProfile
          />
          <RateArrow src={Arrow} />
          <StyledBaseParagraph>Rate this book</StyledBaseParagraph>
        </RatingWrapper>
      </InfoTop>

      <InfoBottom>
        <Author>Description</Author>
        <Description>{book.description}</Description>

        <ButtonsWrapper>
          <FlexWrapper variant="column">
            <BaseParagraph fontSize="16px">Paperback</BaseParagraph>
            <Button available={false}>Not Available</Button>
          </FlexWrapper>

          <FlexWrapper variant="column">
            <BaseParagraph fontSize="16px">Hardcover</BaseParagraph>
            <Button onClick={addToCartHandler}>{book.price}€</Button>
          </FlexWrapper>
        </ButtonsWrapper>
      </InfoBottom>
    </Wrapper>
  );
};

export default BookDetails;
