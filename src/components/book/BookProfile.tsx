import { useParams } from "react-router-dom";

import { ProfileWrapper, TopSection } from "./BookProfile.style";

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
        <TopSection>
          <BookDetails bookId={+id} />
        </TopSection>

        <CommentsSection bookId={+id} />
      </ProfileWrapper>
      <Recommendations bookId={+id} />

      <AuthBanner />
    </>
  );
};

export default BookProfile;
