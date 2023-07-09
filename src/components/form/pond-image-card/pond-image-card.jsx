import PropTypes from "prop-types";

const PondImageCard = ({
  index,
  iconLink,
  selectedImage,
  title,
  isDeletable = true,
  onDeleteClick,
  uploadImages,
  width = 93,
  height = 84,
}) => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center mr-[10px]  mb-[15px]"
      }
    >
      <div
        className={
          "flex flex-col items-center justify-center w-[144px] h-[118px]   border-2 border-[#26365a]  bg-[#1b1d1e] cursor-pointer text-[#8ca6c3] hover:text-[#409bfb] hover:border-[#0337a1]"
        }
        onClick={() => {
          uploadImages(index);
        }}
      >
        {selectedImage ? (
          <div className={"relative"}>
            <div
              className={" w-[141px] h-[115px]"}
              style={{
                backgroundImage: `url(${selectedImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span
              className={
                "absolute w-[100px]  select-none text-sm z-10 text-center bottom-2 left-1/2 -translate-x-1/2 text-white "
              }
            >
              {title}
            </span>
          </div>
        ) : (
          <div
            className={"flex flex-col h-full items-center justify-between p-2"}
          >
            <div
              className={` w-[${width}px] h-[${height}]px  `}
              style={{
                backgroundImage: `url(${iconLink})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: `${width}px`,
                height: `${height}px`,
              }}
            />
            <span className={"select-none text-sm  "}>{title}</span>
          </div>
        )}
      </div>
      {isDeletable && (
        <button
          onClick={(event) => {
            event.preventDefault();
            onDeleteClick(index);
          }}
          className={
            "bg-[#1b1d1e] w-[144px] flex items-center justify-center hover:text-tz-red-text text-dark-text  border-2 border-[#26365a] hover:border-tz-red"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

PondImageCard.propTypes = {
  index: PropTypes.number,
  iconLink: PropTypes.string,
  selectedImage: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  isImageUploadAvailable: PropTypes.bool,
  isDeletable: PropTypes.bool,
  onDeleteClick: PropTypes.func,
  uploadImages: PropTypes.func,
};

export default PondImageCard;
