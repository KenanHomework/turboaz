import React from "react";
import { shallow } from "enzyme";
import CarViewContentVinCard from "./car-view-content-vin-card";

describe("CarViewContentVinCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CarViewContentVinCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
