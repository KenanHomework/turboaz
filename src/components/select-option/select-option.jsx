import PropTypes from "prop-types";
import "./select-option.css";
import { useState } from "react";

const SelectOption = ({ title }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className={"select-none w-[240px] items-center gap-4 flex cursor-pointer"}
      onClick={() => {
        setChecked(!checked);
      }}
    >
      <label className="container select-none">
        <input type="checkbox" checked={checked} />
        <svg viewBox="0 0 64 64" height="20px" width="20px">
          <path
            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
            pathLength="575.0541381835938"
            className="path"
          ></path>
        </svg>
      </label>
      {title}
    </div>
  );
};

SelectOption.propTypes = {
  title: PropTypes.string,
};

export default SelectOption;
