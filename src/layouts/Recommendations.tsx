import { useEffect, useState } from "react";
import bookApi from "../api/bookApi";
import type { Book } from "../types/types";

import { Link } from "react-router-dom";
import { BookCover } from "../components/book/BookProfile.style";
import { useAppSelector } from "../hooks/hooks";
import { BookItemWrapper } from "../components/main/Catalog/BookItem/BookItem.styles";
import { BooksWrapper } from "../components/main/Catalog/Catalog.styles";
import { BaseHeader } from "../shared/styles/styles";
import { ROUTES } from "../routes/routes";
import styled from "@emotion/styled";

type Props = {
  bookId: number;
};

const Recommendations = ({ bookId }: Props) => {
  const [recommendations, setRecommendations] = useState<Book[] | null>(null);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    const loadRecommendations = async () => {
      const books = await bookApi.getRecommendations(+bookId);
      setRecommendations(books);
    };

    loadRecommendations();
  }, [bookId]);

  if (!user) return null;

  return (
    <>
      <StyledBaseHeader>Recommendations</StyledBaseHeader>
      <BooksWrapper>
        {recommendations?.map((book) => {
          return (
            <BookItemWrapper>
              <Link to={ROUTES.bookProfile.getUrl(book.id)}>
                <BookCover src={book.cover} />
              </Link>
            </BookItemWrapper>
          );
        })}
      </BooksWrapper>
    </>
  );
};

const StyledBaseHeader = styled(BaseHeader)`
  margin: 80px;
`;

export default Recommendations;
