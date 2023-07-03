import PropTypes from "prop-types";

const CarViewContentFooter = ({ car }) => {
  const { id } = car;
  return (
    <div className={"py-[30px] text-second-text"}>
      <label>Elanın nömrəsi:</label> <span>{id}</span>
    </div>
  );
};
CarViewContentFooter.propTypes = {
  car: PropTypes.object,
};

export default CarViewContentFooter;
