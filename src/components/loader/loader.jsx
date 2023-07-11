import "./loader.css";

const Loader = () => {
  return (
    <div
      className={
        "relative z-50  w-[100vw] h-[76vh] bg-loader flex flex-col items-center justify-center"
      }
    >
      <div className="gearbox">
        <div className="overlay"></div>
        <div className="gear one">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="gear two">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="gear three">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="gear four large">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <span className={"my-4 text-2xl font-bold text-second-text"}>
        Elan yerləşdirilir..
      </span>
    </div>
  );
};

export default Loader;
