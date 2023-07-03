import Header from "../header/index.js";
import { Outlet } from "react-router-dom";
import Footer from "../footer/index.js";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
