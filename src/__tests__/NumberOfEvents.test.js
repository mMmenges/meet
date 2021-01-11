import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test("render the NumberOfEvents component", () => {
    expect(NumberOfEventsWrapper).toHaveLength(1);
  });

  test("render the number of events element", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

    test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".event-number")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".event-number").prop("value")).toBe(
      numberOfEvents
    );
  });

  test("change state when text input changes", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: "32",
    });
    const eventObject = { target: { value: "10" } };
    NumberOfEventsWrapper.find(".event-number").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe("10");
  });
});