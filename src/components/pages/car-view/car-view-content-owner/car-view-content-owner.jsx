import PropTypes from "prop-types";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const CarViewContentOwner = ({ car }) => {
  const { price, owner } = car;
  const [showNumber, setShowNumber] = useState(false);
  const [animationParent] = useAutoAnimate();

  function divideNumber(price) {
    const str = price.toString();
    const parts = [];

    for (let i = str.length - 1; i >= 0; i -= 3) {
      const part = str.substring(Math.max(0, i - 2), i + 1);
      parts.unshift(part);
    }

    return parts.join(" ");
  }

  function slicePhone(number) {
    return number.slice(0, -2);
  }

  return (
    <div
      className={
        "sticky z-10 top-[70px] bg-primary-bg rounded-lg w-[310px] h-fit box-border p-[20px]"
      }
    >
      {/*Price*/}
      <span className={" text-2xl text-second-text font-bold"}>
        {divideNumber(price)} AZN
      </span>
      {/*Owner Info*/}
      <div
        className={
          "w-full h-[60px] mt-[15px] pt-[15px] border-t-[1px] border-tz-border flex items-center justify-between"
        }
      >
        {/*Personal Info*/}
        <div className={"flex flex-col "}>
          {/*Name*/}
          <span className={"text-second-text"}>{owner.name}</span>
          {/*City*/}
          <span className={"text-sm mt-[2px] text-dark-text"}>
            {owner.city}
          </span>
        </div>

        {/*Profile Photo*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={"60px"}
          height={"60px"}
          className="w-[55px] h-[55px]"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/*Owner Phone*/}
      <div className={"w-full  mt-[20px]"} ref={animationParent}>
        {!showNumber ? (
          <div
            className="flex flex-col items-center cursor-pointer justify-between w-full h-fit py-[10px]  rounded-lg bg-[#31904d] hover:bg-[#1e7739]"
            onClick={() => {
              if (showNumber) return;
              setShowNumber(!showNumber);
            }}
          >
            <div className="text-sm text-[#e8e6e3]">Nömrəni göstər</div>
            <div className={"flex items-center"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[30px] h-[30px] mr-[5px]"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="text-lg font-medium text-[#e8e6e3]">
                {slicePhone(owner.phone)}••
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-start h-[130px] ">
            <div className={"flex items-center h-[27px]"}>
              <div
                className={"w-[30px] h-[30px] bg-cover"}
                style={{
                  backgroundImage:
                    "url('https://turbo.azstatic.com/assets/application/sprites/main-f72a85923bfd68fe9c736557e1d9312470178ede00e3b18e2601a5b5d92eae49.svg#icon-phone--red')",
                }}
              />
              <a
                className="text-[22px] text-second-text font-bold  underline-animation hover:text-tz-red-hover"
                href={`tel:${owner.phone}`}
              >
                {owner.phone}
              </a>
            </div>

            <div className="mt-[20px] p-[15px] bg-[#430300] rounded-lg border-[1px] border-[#980013]">
              <div className="flex items-center justify-between gap-2">
                <div
                  className={"w-[30px] h-[30px] bg-cover"}
                  style={{
                    backgroundImage:
                      "url('https://turbo.azstatic.com/assets/application/sprites/main-f72a85923bfd68fe9c736557e1d9312470178ede00e3b18e2601a5b5d92eae49.svg#icon-warning--red')",
                  }}
                />
                <div className={"w-full text-sm text-second-text"}>
                  <span className="text-[#ff576c] font-bold">Diqqət!</span>{" "}
                  Avtomobilə baxış keçirmədən öncə beh göndərməyin.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

CarViewContentOwner.propTypes = {
  car: PropTypes.object,
};

export default CarViewContentOwner;
