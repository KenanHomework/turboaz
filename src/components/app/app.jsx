import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layout/index.js";
import HomePage from "../../pages/home-page/index.js";
import NewPage from "../../pages/new-page/index.js";
import CarView from "../../pages/car-view/index.js";
import Autos from "../../pages/autos/index.js";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/autos"}>
              <Route path={"/autos"} element={<Autos />} />
              <Route path={"new"} element={<NewPage />} />
              <Route path={":id"} element={<CarView />} />
            </Route>
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
