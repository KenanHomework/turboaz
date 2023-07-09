import PropTypes from "prop-types";
import { toast } from "react-toastify";

const CarViewContentFooter = ({ car }) => {
  const { id } = car;

  function handleCopyClick() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(id).then(() => {
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
    <div className={"py-[30px] text-second-text"}>
      <label>Elanın nömrəsi:</label>{" "}
      <span className={"cursor-pointer text-white "} onClick={handleCopyClick}>
        {id}
      </span>
    </div>
  );
};
CarViewContentFooter.propTypes = {
  car: PropTypes.object,
};

export default CarViewContentFooter;
