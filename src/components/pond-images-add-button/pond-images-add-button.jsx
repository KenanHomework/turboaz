import React from "react";

const PondImagesAddButton = () => {
  return (
    <div
      className={
        "flex  items-center justify-center w-[144px] h-[118px]  mb-[15px] border-2 border-[#26365a]  bg-[#1b1d1e] cursor-pointer text-[#8ca6c3] hover:text-[#409bfb] hover:border-[#0337a1]"
      }
    >
      <img
        className={`w-[54px] h-[54px]`}
        src={
          "https://turbo.azstatic.com/assets/application/sprites/main-f72a85923bfd68fe9c736557e1d9312470178ede00e3b18e2601a5b5d92eae49.svg#plus"
        }
        alt={"şəkil əlavə et icon"}
      />
    </div>
  );
};

export default PondImagesAddButton;
