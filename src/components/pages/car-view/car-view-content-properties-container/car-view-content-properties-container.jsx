import PropTypes from "prop-types";
import CarViewProperty from "../car-view-property/index.js";

const CarViewContentPropertiesContainer = ({ car }) => {
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
    <div
      className={
        "flex flex-wrap w-full  gap-[10px] py-[30px] border-b-[1px] border-tz-border"
      }
    >
      <CarViewProperty title={"Şəhər"} value={car.city} />
      <CarViewProperty title={"Sürətlər qutusu"} value={car.gearBox} />{" "}
      <CarViewProperty title={"Marka"} value={car.vendor} />
      <CarViewProperty title={"Ötürücü"} value={car.transmission} />
      <CarViewProperty title={"Model"} value={car.model} />
      <CarViewProperty
        title={"Yeni"}
        value={car.mileage === 0 ? "Bəli" : "Xeyr"}
      />
      <CarViewProperty title={"Buraxılış ili"} value={car.year} />
      <CarViewProperty
        title={"Hansı bazar üçün yığılıb"}
        value={car.marketAssembled}
      />
      <CarViewProperty title={"Ban növü"} value={car.banType} />
      <CarViewProperty title={"Rəng"} value={car.color} />
      <CarViewProperty
        title={"Mühərrik"}
        value={`${car.engineVolume} L/${car.horsePower} a.g./${car.fuel}`}
      />
      <CarViewProperty
        title={"Yürüş"}
        value={`${divideNumber(car.mileage)} km`}
      />
    </div>
  );
};

CarViewContentPropertiesContainer.propTypes = {
  car: PropTypes.object,
};

export default CarViewContentPropertiesContainer;
