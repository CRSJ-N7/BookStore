import star from "../../../../../assets/icons/StarBlanked.svg";
import starFilled from "../../../../../assets/icons/Star.svg";

type Props = {
  rating: number;
  onRate: (value: number) => void;
};

const StarRating = ({ rating, onRate }: Props) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <img
          key={value}
          src={value <= rating ? starFilled : star}
          style={{
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
          onClick={() => onRate(value)}
        />
      ))}
    </div>
  );
};

export default StarRating;
