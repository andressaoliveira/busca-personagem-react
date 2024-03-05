import expect from "expect";
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { mapStateToProps, mapDispatchToProps } from "../index"
import Personagens from "../index";

configure({ adapter: new Adapter() })

const mockStore = configureMockStore();
const store = mockStore({})
describe("Personagens", () => {
  function setup() {
    const props = {
      personagens: {
        data: [
          {
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
          },
          {
            char_id: 19,
            name: "Huell Babineaux",
            birthday: "Unknown",
            occupation: [
              "Bodyguard"
            ],
            img: "https://vignette.wikia.nocookie.net/breakingbad/images/c/c1/4x11_-_Huell.png/revision/latest?cb=20130913100459&path-prefix=es",
            status: "Alive",
            nickname: "Huell",
            appearance: [
              4,
              5
            ],
            portrayed: "Lavell Crawford"
          },
          {
            char_id: 20,
            name: "Steven Gomez",
            birthday: "Unknown",
            occupation: [
              "DEA Agent"
            ],
            img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_steven-gomez-lg.jpg",
            status: "Deceased",
            nickname: "Gomie",
            appearance: [
              1,
              2,
              3,
              4,
              5
            ],
            portrayed: "Steven Michael Quezada"
          },
        ]
      }
    };
    return shallow(
      <Provider store={store}>
        <Personagens {...props} />
      </Provider>);
  }

  const wrapper = setup();

  it("deve montar o componente sem deixar de funcionar", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Testes do index", () => {
    const funct = { personagens: {}}
    const dispatch = jest.fn()
    expect(mapStateToProps(funct)).toEqual(funct)
    mapDispatchToProps(dispatch).listarPersonagens()
    expect(dispatch).toHaveBeenCalled()
  })
});
