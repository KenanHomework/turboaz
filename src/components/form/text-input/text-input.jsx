import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";

const TextInput = ({ value, title, isRequired, placeholder, ...props }) => {
  const [field] = useField(props);

  return (
    <div className={"w-[460px] h-fit flex   justify-between gap-2"}>
      <div>
        <span className={"text-sm"}>{title}</span>
        {isRequired && <span className={"ml-2 text-tz-red-text"}>*</span>}
      </div>
      <div>
        <input
          {...field}
          value={value}
          placeholder={placeholder}
          className={
            "w-72 h-[30px] pl-2.5 pr-7 bg-component-bg text-secondary border-[1px]  border-tz-border  focus:border-tz-border-hover focus:outline-none focus:ring-0  rounded-lg"
          }
          type={"text"}
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

TextInput.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default TextInput;
