import expect from "expect";
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import Personagem from "../index";

configure({ adapter: new Adapter() })

describe("Personagem", () => {
  function setup() {
    const props = {
      personagem: {
        char_id: 18,
        name: "Brandon Mayhew",
        birthday: "Unknown",
        occupation: [
          "Low-level meth distributer"
        ],
        img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_badger-lg.jpg",
        status: "Alive",
        nickname: "Badger",
        appearance: [
          1,
          2,
          3,
          4,
          5
        ],
        portrayed: "Matt L. Jones"
      }
    };
    return shallow(<Personagem {...props} />);
  }

  const wrapper = setup();

  it("deve montar o componente sem deixar de funcionar", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("deve mostrar ocupacao com 1", () => {
    const ocupacao = ["ocupacao"];
    const resultado = wrapper.instance().obterOcupacao(ocupacao);

    expect(resultado).toBe(" ocupacao");
  });

  it("deve mostrar ocupacao com mais de 1", () => {
    const ocupacao = ["ocupacao 1", "ocupacao 2"]
    const resultado = wrapper.instance().obterOcupacao(ocupacao);

    expect(resultado).toBe(" ocupacao 1,  ocupacao 2");
  });
});
