import PropTypes from "prop-types";
import SelectOption from "../select-option/index.js";

const SelectOptionContainer = ({ options }) => {
  return (
    <div className={"flex flex-wrap justify-between items-center gap-4 w-full"}>
      {options.map((option) => {
        return <SelectOption key={option} title={option} />;
      })}
    </div>
  );
};

SelectOptionContainer.propTypes = {
  options: PropTypes.array,
};

export default SelectOptionContainer;
