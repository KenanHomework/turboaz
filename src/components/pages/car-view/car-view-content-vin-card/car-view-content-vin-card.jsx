import PropTypes from "prop-types";
import { toast } from "react-toastify";

const CarViewContentVinCard = ({ car }) => {
  const { vin } = car;

  function handleCopyClick() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(vin).then(() => {
        toast.success("Surəti götürüldü!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      });
    }
  }

  return (
    <div className={"py-[20px] border-b-[1px] border-tz-border"}>
      <div
        className={"flex justify-between p-[15px] bg-primary-bg rounded-lg "}
      >
        {/*Info*/}
        <div className={"flex flex-col gap-[5px]"}>
          <div
            className={"flex items-center gap-2 font-medium text-second-text"}
          >
            <label className={"text-dark-text"}>VIN-kod: </label>
            <span>{vin}</span>
            <button
              className={"w-[16px] h-[16px] ml-[15px] bg-cover"}
              style={{
                backgroundImage:
                  "url('https://turbo.azstatic.com/assets/shared/icon-copy-d5edae8031592cb94e1ee50802d1bba7fe51fa3b5b152ca730bf58c9c5ff7312.svg')",
              }}
              onClick={handleCopyClick}
            />
          </div>
          <label className={"text-[13px] text-dark-text "}>
            Avtomobili almadan öncə VIN-kodu yoxlayın.
          </label>
        </div>
        {/*Action*/}
        <a
          className={
            "px-[35px] py-[15px] border-[1px] border-[#053898] rounded-lg text-[#50a4f9] bg-component-bg hover:bg-primary-bg"
          }
          href={`https://www.google.com/search?tbm=isch&q=${vin}`}
          target={"_blank"}
          rel="search"
        >
          İnternetdə axtar
        </a>
      </div>
    </div>
  );
};

CarViewContentVinCard.propTypes = {
  car: PropTypes.object,
};

export default CarViewContentVinCard;
