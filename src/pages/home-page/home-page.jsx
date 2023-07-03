import SectionTitle from "../../components/section-title/index.js";
import LastListings from "../../components/last-listings/index.js";
import Search from "../../components/search/index.js";

const HomePage = () => {
  return (
    <div className={" "}>
      <Search />
      <LastListings carCount={32} />
    </div>
  );
};

export default HomePage;
