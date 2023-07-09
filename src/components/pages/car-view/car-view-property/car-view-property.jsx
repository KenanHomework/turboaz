import PropTypes from "prop-types";

const CarViewProperty = ({ title, value }) => {
  return (
    <div className={"grid  grid-cols-2 gap-[5px]  w-[315px]"}>
      <label className={"text-dark-text"}>{title}</label>
      <span className={"text-second-text"}>{value}</span>
    </div>
  );
};

CarViewProperty.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

export default CarViewProperty;
