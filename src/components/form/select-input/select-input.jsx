import PropTypes from "prop-types";
import ComponentTitle from "../../component-title/index.js";
import SelectOptionContainer from "../select-option-container/index.js";
import { useField } from "formik";

const SelectInput = ({ title, options, name }) => {
  const [field] = useField(name);

  const handleChange = (options) => {
    field.onChange({ target: { name: name, value: options } });
  };

  return (
    <div className={"w-full flex-col my-8"}>
      <ComponentTitle title={title} />
      <SelectOptionContainer options={options} onChange={handleChange} />
    </div>
  );
};
SelectInput.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};
export default SelectInput;
