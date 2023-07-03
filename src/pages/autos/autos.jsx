import Search from "../../components/search/index.js";
import SectionTitle from "../../components/section-title/index.js";
import LastListings from "../../components/last-listings/index.js";
import { useLocation } from "react-router-dom";

const Autos = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const query = queryParams.get("query");
  const sortType = queryParams.get("sort");

  function handleOptionChange(option) {
    let queryParams = "";

    if (query && query.length > 0) {
      queryParams += `query=${query}&`;
    }

    queryParams += `sort=${option.type}`;

    window.location = `/autos?${queryParams}`;
  }

  return (
    <div>
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
    </div>
  );
};

export default Autos;
