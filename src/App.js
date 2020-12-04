import React, {
    Component
} from 'react';
import moment from 'moment';
import './App.css';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {
    WarningAlert
} from './Alert';
import {
    getEvents
} from './api';

class App extends Component {

    componentDidMount() {
        getEvents().then(response => this.setState({
            events: response
        }));
    }

    state = {
        events: [],
        page: null,
        defaultCity: '',
        lat: null,
        lon: null,
        warningText: ''
    }

    updateEvents = (lat, lon, page) => {
        if (!navigator.onLine) {
            this.setState({
                warningText: 'No Network Connection! Event list loaded from last session.'
            });
        } else {
            this.setState({
                warningText: ''
            })
        }

        if (lat && lon) {
            getEvents(lat, lon, this.state.page).then(response => this.setState({
                events: response,
                lat,
                lon
            }));
        } else if (page) {
            getEvents(this.state.lat, this.state.lon, page).then(response => this.setState({
                events: response,
                page
            }));
        } else {
            getEvents(this.state.lat, this.state.lon, this.state.page).then(response => this.setState({
                events: response
            }));
        }
    }

    countEventsOnADate = (date) => {
        let count = 0;

        for (let i = 0; i < this.state.events.length; i += 1) {
            if (this.state.events[i].local_date === date) {
                count += 1;
            }
        }

        return count;
    }

    getData = () => {
        const next7Days = [];
        const currentDate = moment();

        for (let i = 0; i < 7; i += 1) {
            currentDate.add(1, 'days');
            const dateString = currentDate.format('YYYY-MM-DD');
            const count = this.countEventsOnADate(dateString);
            next7Days.push({
                date: dateString,
                number: count
            });
        }

        return next7Days;
    }

    render() {

        return ( <
            div className = "App" >
            <
            div className = "headLine" >
            <
            h1 > MeetUp < span > s to come < /span></h
            1 >
            <
            /div> <
            CitySearch updateEvents = {
                this.updateEvents
            }
            /> <
            WarningAlert text = {
                this.state.warningText
            }
            /> <
            NumberOfEvents updateEvents = {
                this.updateEvents
            }
            numberOfEvents = {
                this.state.events.length
            }
            lat = {
                this.state.lat
            }
            lon = {
                this.state.lon
            }
            /> <
            div className = "chartWrapper" >
            <
            ResponsiveContainer height = {
                250
            } >
            <
            ScatterChart margin = {
                {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: -20,
                }
            } >
            <
            CartesianGrid stroke = "#eee"
            strokeDasharray = "5 5" / >
            <
            XAxis type = "category"
            dataKey = "date"
            name = "date" / >
            <
            YAxis type = "number"
            dataKey = "number"
            name = "number of events"
            allowDecimals = {
                false
            }
            /> <
            Tooltip cursor = {
                {
                    strokeDasharray: '3 3'
                }
            }
            /> <
            Scatter data = {
                this.getData()
            }
            fill = "#8884d8" / >
            <
            /ScatterChart> < /
            ResponsiveContainer > <
            /div> <
            EventList events = {
                this.state.events
            }
            /> < /
            div >
        );
    }
}

export default App;