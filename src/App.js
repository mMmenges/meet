import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
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
