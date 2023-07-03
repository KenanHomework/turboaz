import React from "react";
import { shallow } from "enzyme";
import CarViewContentPhotoFooter from "./car-view-content-photo-footer";

describe("CarViewContentPhotoFooter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CarViewContentPhotoFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
