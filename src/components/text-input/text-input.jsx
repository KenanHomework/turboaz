import PropTypes from "prop-types";

const TextInput = ({ value, title, isRequired, placeholder }) => {
  return (
    <div
      className={"w-[460px] h-[30px] flex items-center justify-between gap-2"}
    >
      <div>
        <span className={"text-sm"}>{title}</span>
        {isRequired && <span className={"ml-2 text-tz-red-text"}>*</span>}
      </div>
      <input
        value={value}
        placeholder={placeholder}
        className={
          "w-72 h-[30px] pl-2.5 pr-7 bg-component-bg text-secondary border-[1px]  border-tz-border  focus:border-tz-border-hover focus:outline-none focus:ring-0  rounded-lg"
        }
        type={"text"}
      />
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default TextInput;
