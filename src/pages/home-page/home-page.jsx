import LastListings from "../../components/last-listings/index.js";
import Search from "../../components/search/index.js";
import { motion } from "framer-motion";

const HomePage = () => {
  document.title = "Turbo.Az - Avtomobilləri buradan seçirlər";
  return (
    <motion.div
      className={" "}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Search />
      <LastListings carCount={32} />
    </motion.div>
  );
};

export default HomePage;
