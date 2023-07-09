import PropTypes from "prop-types";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const CarViewContentDescription = ({ car, limit = 200 }) => {
  const [animationParent] = useAutoAnimate();
  const { description } = car;
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div
      className="whitespace-pre-wrap text-[15px] text-second-text py-[30px] border-b-[1px] border-tz-border overflow-hidden"
      ref={animationParent}
    >
      {showFullText || description.length <= limit ? (
        <div>{description}</div>
      ) : (
        <div
          className={"flex flex-col items-start gap-2"}
          ref={animationParent}
        >
          {description.slice(0, limit)}...
          <button
            onClick={toggleText}
            className="text-blue-500 underline-animation cursor-pointer"
          >
            Davamını oxu
          </button>
        </div>
      )}
    </div>
  );
};

CarViewContentDescription.propTypes = {
  car: PropTypes.object,
  limit: PropTypes.number,
};

export default CarViewContentDescription;
