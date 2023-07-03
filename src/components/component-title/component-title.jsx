import PropTypes from "prop-types";

const ComponentTitle = ({ title, hint }) => {
  return (
    <div className={"flex-col mb-4"}>
      <div className={"w-full mb-2 font-semibold text-xl"}>{title}</div>
      <div className={"text-dark-text text-sm"}>{hint}</div>
    </div>
  );
};

ComponentTitle.propTypes = {
  title: PropTypes.string,
  hint: PropTypes.string,
};

export default ComponentTitle;
