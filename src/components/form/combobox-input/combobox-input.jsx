import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import InputHeader from "../input-header/index.js";

const ComboboxInput = ({ options, title, isRequired, ...props }) => {
  const [field] = useField(props);

  return (
    <div className={"w-[460px] h-fit flex justify-between gap-2"}>
      <InputHeader title={title} isRequired={isRequired} />
      <div>
        <select
          className={
            "w-72 h-[30px] pl-2.5 pr-7 bg-component-bg text-secondary border-[1px]  border-tz-border  focus:border-tz-border-hover focus:outline-none focus:ring-0  rounded-lg cursor-pointer"
          }
          {...field}
          {...props}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            );
          })}
        </select>
        <ErrorMessage
          name={field.name}
          component={"small"}
          className={"text-xs block mt-2 text-tz-red-text"}
        />
      </div>
    </div>
  );
};

ComboboxInput.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default ComboboxInput;
