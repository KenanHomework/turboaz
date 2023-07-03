import PropTypes from "prop-types";

const SearchInput = ({ value, placeHolder, onChange, onEnter }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };
  return (
    <input
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
      onKeyUp={handleKeyPress}
      className={
        "w-full pl-2.5 pr-7 bg-component-bg text-secondary border-[1px] h-12 border-tz-border  focus:border-tz-border-hover focus:outline-none focus:ring-0  rounded-lg"
      }
      type={"text"}
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
};

export default SearchInput;
