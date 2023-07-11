import PropTypes from "prop-types";
import SelectOption from "../select-option/index.js";
import { useState } from "react";

const SelectOptionContainer = ({ options, onChange }) => {
  const [data, setData] = useState(options);
  const handleChange = (title, status) => {
    // data.forEach((option) => {
    //   if (option.value === title) option.checked = status;
    // });

    const element = data.find((item) => item.value === title);
    if (element) {
      element.checked = status;
    }

    const value = data
      .filter((item) => item.checked)
      .map((option) => option.value);
    onChange(value);
  };

  return (
    <div className={"flex flex-wrap justify-between items-center gap-4 w-full"}>
      {data.map((option) => {
        return (
          <SelectOption
            key={option.value}
            onChange={handleChange}
            checked={option.checked}
            title={option.value}
          />
        );
      })}
    </div>
  );
};

SelectOptionContainer.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default SelectOptionContainer;
