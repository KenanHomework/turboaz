import PropTypes from "prop-types";
import CarViewContentEquipment from "../car-view-content-equipment/index.js";

const CarViewContentEquipmentsContainer = ({ car }) => {
  const { equipments } = car;
  return (
    <div
      className={
        "flex flex-wrap w-full  gap-[10px] py-[30px] border-b-[1px] border-tz-border"
      }
    >
      {equipments.map((equipment) => (
        <CarViewContentEquipment key={equipment} title={equipment} />
      ))}
    </div>
  );
};

CarViewContentEquipmentsContainer.propTypes = {
  car: PropTypes.object,
};

export default CarViewContentEquipmentsContainer;
