import PropTypes from "prop-types";
import { motion } from "framer-motion";

const CarViewContentEquipment = ({ title }) => {
  const item = {
    hidden: { translateY: 20, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={item}
      className={
        "text-[15px] text-second-text p-[10px] bg-primary-bg cursor-pointer hover:bg-secondary-light-bg rounded-full"
      }
    >
      {title}
    </motion.div>
  );
};

CarViewContentEquipment.propTypes = {
  title: PropTypes.string,
};

export default CarViewContentEquipment;
