import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const EventList = ({ events }) => {
  return (!events) ? null : (
      <ul className='EventList'>
        {events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
  )
}
 
EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventList;