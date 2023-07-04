import Search from "../../components/search/index.js";
import SectionTitle from "../../components/section-title/index.js";
import LastListings from "../../components/last-listings/index.js";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const Autos = () => {
  const navigate = useNavigate();

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

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={" "}>
        <Search value={query || ""} />
        <SectionTitle title={"Son Elanlar"} />
        <LastListings
          carCount={32}
          actionBarIsVisible={true}
          optionChange={handleOptionChange}
          currentOption={sortType}
        />
      </div>
    </motion.div>
  );
};

export default Autos;
