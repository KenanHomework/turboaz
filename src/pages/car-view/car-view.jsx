import { Link, useParams } from "react-router-dom";
import CarViewInfoHeader from "../../components/pages/car-view/car-view-info-header/index.js";
import LastListings from "../../components/last-listings/index.js";
import CarViewContent from "../../components/pages/car-view/car-view-content/index.js";
import CarViewContentHeader from "../../components/pages/car-view/car-view-content-header/index.js";
import { motion } from "framer-motion";
import ApiService from "../../../api/CarsApi.js";
import Notfound from "../../components/notfound/index.js";

const CarView = () => {
  const { id } = useParams();
  console.log("id:" + id);
  const api = new ApiService();

  let car = api.getCar(id);

  if (!car) {
    document.title = "Elan tapılmadı - Turbo.Az";

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Notfound
          title={"Elan Tapılmadı"}
          description={
            "Saytda belə elan artıq mövcud deyil və ya ünvan yanlış daxil edilib."
          }
        />
        <div
          className={
            "w-full h-fit inline-flex items-center justify-center my-4"
          }
        >
          <Link
            to={"/autos"}
            className={
              "py-[15px] px-10 bg-tz-red hover:bg-tz-red-hover-dark rounded-lg text-sm transition-all duration-150"
            }
          >
            Yeni elanları göstər
          </Link>
        </div>
        <LastListings isVisibleSectionTitle={true} />
      </motion.div>
    );
  }

  document.title = `${car.vendor} ${car.model} - Turbo.Az`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={"bg-component-bg"}
    >
      <CarViewInfoHeader car={car} />
      <CarViewContentHeader car={car} />
      <CarViewContent car={car} />
      <LastListings isVisibleSectionTitle={true} />
    </motion.div>
  );
};

export default CarView;
