import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";
import { extractLocations, getEvents } from '../api';

describe('<App /> integration', () => {
  test("get list of events after the user selects a city", async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked("Berlin, Germany");
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith('Berlin, Germany', null)
    AppWrapper.unmount();
  });

  test("change state after getting list of events", async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents("");
    await AppWrapper.update();
    expect(await AppWrapper.state("events")).toEqual(mockData);
    AppWrapper.unmount();
  });
});

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test("render NumberOfEvents", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  test("render correct list of events", () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    // AppWrapper.setState({
    //   events: mockData,
    // });
    // console.log(AppWrapper.find(".event"), "find evernt===========")
    // expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);

    AppWrapper.unmount();
  });
});