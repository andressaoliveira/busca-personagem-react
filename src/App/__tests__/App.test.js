import expect from "expect";
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import App from "../index";

configure({ adapter: new Adapter() })

describe("App", () => {
  function setup() {
    const props = {};
    return shallow(<App {...props} />);
  }

  const wrapper = setup();

  it("deve montar o componente sem deixar de funcionar", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
