import Header from "../header/index.js";
import { Outlet } from "react-router-dom";
import Footer from "../footer/index.js";
import "./layout.css";

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
