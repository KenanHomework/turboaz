import PropTypes from "prop-types";

const Notfound = ({ title, description }) => {
  return (
    <div className={"flex-col tz-inner-container min-h-fit my-8"}>
      {/*Image*/}
      <div className={"flex  mb-8 w-full items-center justify-center"}>
        <img
          className={"w-44 h-52"}
          alt={"not-found-img"}
          src="https://turbo.azstatic.com/assets/application/placeholder-1a310ce264429c846b10a9e6783dc28a4a45b724fa7635ce7f6939598d156b8f.png"
        />
      </div>
      {/*Details*/}
      <div className={"flex-col w-full items-center justify-start"}>
        {/*Title*/}
        <div className={"mb-8 text-lg font-medium text-second-text"}>
          {title}
        </div>
        {/*Description*/}
        <div className={"text-lg font-medium text-dark-text"}>
          {description}
        </div>
      </div>
    </div>
  );
};

Notfound.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Notfound;
