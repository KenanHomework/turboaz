import PropTypes from "prop-types";

const InputHeader = ({ title, isRequired }) => {
  return (
    <div className={"w-fit h-[30px]  flex items-center justify-center"}>
      <span className={" text-sm"}>{title}</span>
      {isRequired && <span className={"ml-2 text-tz-red-text"}>*</span>}
    </div>
  );
};

InputHeader.propTypes = {
  title: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default InputHeader;
