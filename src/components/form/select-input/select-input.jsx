import PropTypes from "prop-types";
import ComponentTitle from "../../component-title/index.js";
import SelectOptionContainer from "../select-option-container/index.js";

const SelectInput = ({ title, options }) => {
  return (
    <div className={"w-full flex-col my-8"}>
      <ComponentTitle title={title} />
      <SelectOptionContainer options={options} />
    </div>
  );
};
SelectInput.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
};
export default SelectInput;
