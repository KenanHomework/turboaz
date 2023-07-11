import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import InputHeader from "../input-header/index.js";

const NumericInput = ({
  value,
  title,
  placeholder,
  isRequired,
  min,
  max = 2147483647,
  step,
  ...props
}) => {
  const [field] = useField(props);

  return (
    <div
      className={"w-[460px] h-[30px] flex items-center justify-between gap-2"}
    >
      <InputHeader title={title} isRequired={isRequired} />
      <div>
        <input
          {...field}
          {...props}
          value={value}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          className={
            "w-72 h-[30px] pl-2.5 pr-7 bg-component-bg text-secondary border-[1px]  border-tz-border  focus:border-tz-border-hover focus:outline-none focus:ring-0  rounded-lg"
          }
          type={"number"}
        />
        <ErrorMessage
          name={field.name}
          component={"small"}
          className={"text-xs block mt-2 text-tz-red-text"}
        />
      </div>
    </div>
  );
};

NumericInput.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default NumericInput;
