import CardContainer from "../card-container/index.js";
import PropTypes from "prop-types";
import SectionTitle from "../section-title/index.js";
import CarsApi from "../../../api/CarsApi.js";
import { useEffect, useState } from "react";

const LastListings = ({
  carCount = 12,
  actionBarIsVisible,
  isVisibleSectionTitle,
  optionChange,
  currentOption,
}) => {
  const api = new CarsApi();

  const [cars, setCars] = useState([]);
  const fetchData = () => {
    api.getLastListings(carCount).then(setCars);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={"bg-primary-bg"}>
      {isVisibleSectionTitle && (
        <SectionTitle
          title={"Son Elanlar"}
          link={"/autos"}
          linkTitle={"Hamısını Göstər"}
        />
      )}
      <CardContainer
        cars={cars}
        actionBarIsVisible={actionBarIsVisible}
        optionChange={optionChange}
        currentOption={currentOption}
      />
    </div>
  );
};

LastListings.propTypes = {
  actionBarIsVisible: PropTypes.bool,
  carCount: PropTypes.number,
  isVisibleSectionTitle: PropTypes.bool,
  optionChange: PropTypes.func,
  currentOption: PropTypes.string,
};

export default LastListings;
