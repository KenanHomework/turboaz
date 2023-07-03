import PropTypes from "prop-types";

const InputLine = ({ left, right }) => {
  return (
    <div className={" w-full mb-5 flex justify-between items-center"}>
      {left}
      {right}
    </div>
  );
};

InputLine.propTypes = {
  left: PropTypes.any,
  right: PropTypes.any,
};

export default InputLine;
