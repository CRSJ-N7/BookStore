import { useParams } from "react-router-dom";

import { ProfileWrapper } from "./BookProfile.style";

import BookDetails from "./BookDetails/BookDetails";
import CommentsSection from "./CommentsSection/CommentsSection";

import AuthBanner from "../main/AuthBanner/AuthBanner";
import Recommendations from "../../layouts/Recommendations";

const BookProfile = () => {
  const { id } = useParams();

  if (!id) return null;

  return (
    <>
      <ProfileWrapper>
        <BookDetails bookId={+id} />

        <CommentsSection bookId={+id} />
      </ProfileWrapper>
      <Recommendations bookId={+id} />

      <AuthBanner />
    </>
  );
};

export default BookProfile;
