import {
  StarRatingWrapper,
  StarsContainer,
  Star,
  Rating,
} from "./StarRating.style";
import star from "../../../../../assets/icons/StarBlanked.svg";
import starFilled from "../../../../../assets/icons/Star.svg";

type Props = {
  rating: number;
  onRate: (value: number) => void;
  noMargin?: boolean;
};

const StarRating = ({ rating, onRate, noMargin }: Props) => {
  return (
    <StarRatingWrapper noMargin={noMargin}>
      <StarsContainer>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            src={value <= rating ? starFilled : star}
            onClick={() => onRate(value)}
          />
        ))}
      </StarsContainer>
      <Rating>{rating.toFixed(1)}</Rating>
    </StarRatingWrapper>
  );
};

export default StarRating;
