import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: 'Frankfurt, Germany',
    locations: [],
    suggestions: []
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  // Scenario 3
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion
    });
  }

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
  {this.state.suggestions.map((suggestion) => (
    <li key={suggestion}>{suggestion}</li>
  ))}
  <li key='all'>
    <b>See all cities</b>
  </li>;
</ul>
      </div>
    );
  }
}

export default CitySearch;