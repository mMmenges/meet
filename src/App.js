
import React, { Component } from 'react';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import "./nprogress.css";

import './App.css';
import { mockData } from './mock-data';

class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <CitySearch />
        <EventList events={mockData} />
      </div>
    );
  }
}
export default App;
