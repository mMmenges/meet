// check if needed for 4.3
import React, { Component } from "react";
import { ErrorAlert } from "./alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({
      numberOfEvents: value,
    });

    if (value < 1 || value > 32) {
      this.setState({
        infoText: "Please choose a number of events between 1 and 32",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  };

  render() {
    return (
      <div className="number-of-events">
        <ErrorAlert text={this.state.infoText} />
        {/* <h3 className="number-of-events">Number of Events to view:</h3> */}
        <label className="number-of-events-label">Number of Events: </label>
        <input
          type="number"
          className="event-number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;