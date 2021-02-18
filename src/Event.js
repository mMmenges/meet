import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  // handleShowDetails = () => {
  //  if (this.state.showDetails === false) {
  //    this.setState({ showDetails: true });
  //  } else {
  //    this.setState({ showDetails: false });
  //  }
  // };
  render() {
    const showDetails = this.state.showDetails;
    const Event = this.props.event;
    return (

      <div className="Event">
      <div className="eventOverview">
          <p className="eventName">{this.props.event.name}</p>
          <p className="eventDate">{this.props.event.date}</p>
          <p className="eventDetails">{this.props.event.details}</p>
          {showDetails &&
            <button className="showDetails" onClick={() => this.handleHideDetails()}>hide details</button>
          }
          {!showDetails &&
            <button className="showDetails" onClick={() => this.handleShowDetails()}>show details</button>
          }
      </div>
        {}
    </div>);
  }}

export default Event;

/*
import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  onDetailsButtonClicked = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const event = this.props.event;
    // Problem is here. If you name if event you should find the class event, if you name it Event, then use class Event.
    // You can not expect to find class Event if you set it to be event.
    return (
      <div className="event">
        <p className="time">
          {event.start.dateTime} - {event.end.dateTime}
        </p>
        <p className="summary">{event.summary}</p>
        {this.state.showDetails && (
          <div className="extra">
            <p className="location">{event.location}</p>
            <p className="description">{event.description}</p>
            <a className="htmlLink" href={event.htmlLink}>
              Event Link
            </a>
          </div>
        )}
        <button className="details-btn" onClick={this.onDetailsButtonClicked}>
          Details
        </button>
      </div>
    );
  }
}

export default Event;
*/