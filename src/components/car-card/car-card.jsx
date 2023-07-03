import PropTypes from "prop-types";

const CarCard = ({
  id,
  hasVin,
  imageLink,
  price,
  title,
  year,
  mileage,
  engineVolume,
  city,
  updateDate,
}) => {
  function divideNumber(price) {
    const str = price.toString();
    const parts = [];

    for (let i = str.length - 1; i >= 0; i -= 3) {
      const part = str.substring(Math.max(0, i - 2), i + 1);
      parts.unshift(part);
    }

    return parts.join(" ");
  }

  return (
    <a
      href={`/autos/${id}`}
      target={"_blank"}
      className={
        "w-56 h-72 bg-component-bg rounded-lg hover:shadow-2xl hover:shadow-slate-700 transition-all duration-75  "
      }
    >
      {/*Image*/}
      <div className={"block relative"}>
        <img
          src={imageLink}
          alt={title}
          className={"h-44 w-full overflow-clip rounded-t-lg "}
        />
        {hasVin && (
          <div
            className={
              "absolute left-4 bottom-2 text-xs text-white bg-gray-950 p-2 rounded-lg"
            }
          >
            VIN
          </div>
        )}
      </div>
      {/*Car details*/}
      <div className={"text-second-text p-2.5"}>
        {/*Price*/}
        <div className={"font-bold text-lg "}>
          {divideNumber(price)}
          <span> AZN</span>
        </div>
        {/*Attributes*/}
        <div className={"text-base font-medium"}>
          {title}
          <br />
          {year}, {engineVolume} L, {mileage} km
        </div>
        {/**/}
        <div className={"text-dark-text"}>
          {city},{updateDate}
        </div>
      </div>
    </a>
  );
};

CarCard.propTypes = {
  id: PropTypes.string,
  hasVin: PropTypes.bool,
  imageLink: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.number,
  mileage: PropTypes.number,
  engineVolume: PropTypes.number,
  city: PropTypes.string,
  updateDate: PropTypes.string,
};

export default CarCard;
