import PropTypes from "prop-types";

const CarViewContentEquipment = ({ title }) => {
  return (
    <div
      className={
        "text-[15px] text-second-text p-[10px] bg-primary-bg rounded-full"
      }
    >
      {title}
    </div>
  );
};

CarViewContentEquipment.propTypes = {
  title: PropTypes.string,
};

export default CarViewContentEquipment;
