import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    number: 32
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ number: value });
    this.props.updateEvents(null, null, value);
  }

  render() {
    const { number } = this.state;
    return(
      <div className="numberOfEvents">
        <input
          type="text"
          id="number_input"
          value={number}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;