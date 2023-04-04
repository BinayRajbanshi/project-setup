import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
interface ratingProp {
  rating: 1 | 2 | 3 | 4 | 5;
  color?: string;
}

const Rating = (props: ratingProp) => {
  const { rating, color } = props;
  return (
    <div
      className={`flex items-center gap-1 ${
        color ? `text-${color}` : "text-primary"
      }`}
    >
      <span>
        {rating >= 1 ? (
          <BsStarFill />
        ) : rating >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>

      <span>
        {rating >= 2 ? (
          <BsStarFill />
        ) : rating >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <BsStarFill />
        ) : rating >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <BsStarFill />
        ) : rating >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <BsStarFill />
        ) : rating >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      {/* <p>{numReviews} reviews</p> */}
    </div>
  );
};

export default Rating;
