import PropTypes from "prop-types";

const CarViewInfoHeader = ({ car }) => {
  const { vendor, model, id } = car;
  return (
    <div
      className={
        "tz-container bg-component-bg border-b-[1px] border-tz-border "
      }
    >
      <div className={"tz-inner-container "}>
        <div className={" flex gap-2 items-center justify-start  h-[50px] "}>
          <span
            className={
              "cursor-pointer select-none underline-animation text-base text-second-text hover:text-blue-400"
            }
          >
            {vendor}
          </span>
          <span className={"select-none text-[#474d62] "}>&bull;</span>
          <span
            className={
              "cursor-pointer select-none underline-animation text-base text-second-text hover:text-blue-400"
            }
          >
            {model}
          </span>
          <span className={"select-none text-[#474d62] "}>&bull;</span>
          <span className={"text-sm text-second-text"}>Elan № {id}</span>
        </div>
      </div>
    </div>
  );
};

CarViewInfoHeader.propTypes = {
  car: PropTypes.object,
};

export default CarViewInfoHeader;
