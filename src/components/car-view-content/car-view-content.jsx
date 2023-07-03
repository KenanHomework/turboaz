import PropTypes from "prop-types";
import CarViewContentPhoto from "../car-view-content-photo/index.js";
import CarViewContentOwner from "../car-view-content-owner/index.js";
import CarViewContentPropertiesContainer from "../car-view-content-properties-container/index.js";
import CarViewContentDescription from "../car-view-content-description/index.js";
import CarViewContentEquipmentsContainer from "../car-view-content-equipments-container/index.js";
import CarViewContentFooter from "../car-view-content-footer/index.js";
import CarViewContentVinCard from "../car-view-content-vin-card/index.js";

const CarViewContent = ({ car }) => {
  return (
    <div
      className={
        "flex flex-col items-center justify-start tz-container bg-component-bg "
      }
    >
      <div
        className={
          "flex  mx-auto w-[970px] px-5  box-content  gap-4 text-white h-full   items-start "
        }
      >
        {/*Content*/}
        <div className={" w-[640px]"}>
          <div className={"w-full h-[567px] "}>
            <CarViewContentPhoto car={car} />
          </div>
          <CarViewContentPropertiesContainer car={car} />
          {car.vin && <CarViewContentVinCard car={car} />}
          <CarViewContentDescription car={car} />
          <CarViewContentEquipmentsContainer car={car} />
          <CarViewContentFooter car={car} />
        </div>
        <CarViewContentOwner car={car} />
      </div>
    </div>
  );
};

CarViewContent.propTypes = {
  car: PropTypes.object,
};

export default CarViewContent;
