import PropTypes from "prop-types";

const TextareaInput = ({ value, title, isRequired, placeholder, hint }) => {
  return (
    <div className={"w-full h-fit flex items-center justify-start "}>
      <div className={"w-[175px] block"}>
        <span className={"text-sm"}>{title}</span>
        {isRequired && <span className={"ml-2 text-tz-red-text"}>*</span>}
      </div>
      <div className={"flex-col w-[785px] mr-[10px]"}>
        <textarea
          value={value}
          placeholder={placeholder}
          className={
            "w-[785px] min-h-[97px]  p-2.5 bg-component-bg text-secondary border-[1px]  border-tz-border  focus:border-tz-border-hover focus:outline-none focus:ring-0  rounded-lg"
          }
        />
        <span className={"text-sm text-dark-text"}>{hint}</span>
      </div>
    </div>
  );
};

TextareaInput.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  hint: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default TextareaInput;
