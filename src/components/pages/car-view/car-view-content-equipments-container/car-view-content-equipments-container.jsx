import PropTypes from "prop-types";
import CarViewContentEquipment from "../car-view-content-equipment/index.js";
import { motion } from "framer-motion";

const CarViewContentEquipmentsContainer = ({ car }) => {
  const { equipments } = car;

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className={
        "flex flex-wrap w-full  gap-[10px] py-[30px] border-b-[1px] border-tz-border"
      }
    >
      {equipments.map((equipment) => (
        <CarViewContentEquipment key={equipment} title={equipment} />
      ))}
    </motion.div>
  );
};

CarViewContentEquipmentsContainer.propTypes = {
  car: PropTypes.object,
};

export default CarViewContentEquipmentsContainer;
