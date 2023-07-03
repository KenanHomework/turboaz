import React from "react";
import PropTypes from "prop-types";
import CarViewContentPhoto from "../car-view-content-photo/index.js";

const CarViewContentPhotoFooter = ({ car }) => {
  const { updated, viewCount } = car;
  return (
    <div className={"py-[20px] border-b-[1px] border-tz-border"}>
      <div className={" flex gap-2 items-center justify-start  h-[50px] "}>
        <span className={"text-base text-second-text"}>
          Yeniləndi: {updated}
        </span>
        <span className={"select-none text-[#474d62] "}>&bull;</span>
        <span className={"text-base text-second-text"}>
          Baxışların sayı: {viewCount}
        </span>
      </div>
    </div>
  );
};
CarViewContentPhotoFooter.propTypes = {
  car: PropTypes.object,
};
export default CarViewContentPhotoFooter;
