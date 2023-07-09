import Search from "../../components/search/index.js";
import SectionTitle from "../../components/section-title/index.js";
import LastListings from "../../components/last-listings/index.js";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import CardContainer from "../../components/card-container/index.js";
import { useEffect, useState } from "react";
import CarsApi from "../../../api/CarsApi.js";

const Autos = () => {
  document.title = "Turbo.Az - Avtomobilləri buradan seçirlər";
  const api = new CarsApi();

  const navigate = useNavigate();

  const [cars, setCars] = useState();

  const queryParams = new URLSearchParams(location.search);

  const query = queryParams.get("query");
  const sortType = queryParams.get("sort");

  function handleOptionChange(option) {
    let queryParams = "";

    if (query && query.length > 0) {
      queryParams += `query=${query}&`;
    }

    queryParams += `sort=${option.type}`;

    navigate(`/autos?${queryParams}`);
  }

  const haveQuery = query || sortType;

  useEffect(() => {
    api.getCars(query, sortType).then(setCars);
  }, [sortType]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={" "}>
        <Search value={query || ""} />
        <SectionTitle title={"Son Elanlar"} />
        {haveQuery ? (
          <CardContainer
            cars={cars}
            optionChange={handleOptionChange}
            currentOption={sortType}
            actionBarIsVisible={true}
          />
        ) : (
          <LastListings
            carCount={24}
            actionBarIsVisible={true}
            optionChange={handleOptionChange}
            currentOption={sortType}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Autos;
