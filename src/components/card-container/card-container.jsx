import { useAutoAnimate } from "@formkit/auto-animate/react";
import CarCard from "../car-card/index.js";
import Dropdown from "../dropdown/index.js";
import Notfound from "../notfound/index.js";
import PropTypes from "prop-types";

const CardContainer = ({
  cars,
  actionBarIsVisible,
  optionChange,
  currentOption,
}) => {
  const [animationParent] = useAutoAnimate();
  if (!Array.isArray(cars)) {
    return (
      <Notfound
        title={"Təəssüf ki, axtarışınız əsasında heç nə tapılmadı."}
        description={"Zəhmət olmasa, daha uyğun axtarış filtrləri seçin."}
      />
    );
  }
  return (
    <div
      className={
        "flex flex-col h-fit items-center mx-auto w-[970px] px-5 box-content gap-4   justify-between text-white  my-3"
      }
    >
      {/*Container header*/}
      {actionBarIsVisible && (
        <div className={"flex justify-between items-center w-full"}>
          {/*Car length*/}
          <span className="">{cars.length} elan</span>
          <Dropdown
            optionChange={optionChange}
            sortOptions={[
              { name: "Tarixə görə", type: "date", current: false },
              { name: "Əvvəlcə ucuz", type: "fromCheapest", current: false },
              { name: "Əvvəlcə bahalı", type: "fromExpensive", current: false },
              { name: "Yürüş", type: "mileage", current: false },
              { name: "Buraxılış ili", type: "productionYear", current: false },
            ]}
            currentOption={currentOption}
          />
        </div>
      )}
      <div className={"flex gap-3 flex-wrap "} ref={animationParent}>
        {cars.map((car) => {
          return (
            <CarCard
              key={car.id}
              hasVin={car.hasVin}
              id={car.id}
              price={car.price}
              title={car.title}
              year={car.year}
              engineVolume={car.engineVolume}
              mileage={car.mileage}
              city={car.city}
              updateDate={car.updateDate}
              imageLink={car.imageLink}
            />
          );
        })}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  cars: PropTypes.array,
  actionBarIsVisible: PropTypes.bool,
  optionChange: PropTypes.func,
  currentOption: PropTypes.string,
};

export default CardContainer;
