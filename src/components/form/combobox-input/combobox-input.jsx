import PropTypes from "prop-types";

const ComboboxInput = ({ options, title, isRequired }) => {
  return (
    <div
      className={"w-[460px] h-[30px] flex items-center justify-between gap-2"}
    >
      <div>
        <span className={"text-sm"}>{title}</span>
        {isRequired && <span className={"ml-2 text-tz-red-text"}>*</span>}
      </div>
      <select
        className={
          "w-72 h-[30px] pl-2.5 pr-7 bg-component-bg text-secondary border-[1px]  border-tz-border  focus:border-tz-border-hover focus:outline-none focus:ring-0  rounded-lg"
        }
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

ComboboxInput.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default ComboboxInput;
