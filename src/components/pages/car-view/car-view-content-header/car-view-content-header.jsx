import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./car-view-content-header.css";
import { Link } from "react-router-dom";

const CarViewContentHeader = ({ car }) => {
  const { vendor, model, engineVolume, year, mileage } = car;
  const [animationParent] = useAutoAnimate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyElement = document.getElementById("sticky-element");

      if (stickyElement) {
        const { top } = stickyElement.getBoundingClientRect();
        const shouldBeSticky = top <= 10;

        setIsSticky(shouldBeSticky);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      id="sticky-element"
      ref={animationParent}
      className={`sticky z-50 top-[-1px] tz-container bg-component-bg h-[60px] mb-[5px] ${
        isSticky && "border-y-[1px] border-tz-border"
      }`}
    >
      <div className="flex justify-start tz-inner-container">
        <div
          className="flex items-center gap-2 justify-center"
          ref={animationParent}
        >
          <Link
            to="/"
            className={` bg-cover ${
              isSticky
                ? "visible sticky-animation  w-[42px] h-[42px] mr-[10px]"
                : "invisible w-[0px] h-[0px] mr-[0px]"
            }`}
            style={{
              backgroundImage:
                "url('https://turbo.azstatic.com/assets/application/sprites/main-f72a85923bfd68fe9c736557e1d9312470178ede00e3b18e2601a5b5d92eae49.svg#icon-logo--red--hover') ",
            }}
          />
          <span className="text-2xl font-bold text-second-text">
            {vendor} {model},{engineVolume} L,{year} il,{" "}
            {mileage === 0 ? "yeni" : mileage}
          </span>
        </div>
      </div>
    </div>
  );
};

CarViewContentHeader.propTypes = {
  car: PropTypes.object,
};

export default CarViewContentHeader;
