import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData} />);
  });

  test('render the Event component', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('render the event element', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  })

  test('render the event overview div', () => {
    expect(EventWrapper.find('.event-overview')).toHaveLength(1);
  });

  test('render contents of the event overview', () => {
    expect(EventWrapper.find('.event-overview').children()).toHaveLength(4);
  });

 
  test('render the event details div', () => {
    EventWrapper.setState({ showDetails: true });
    expect(EventWrapper.find('.event-details')).toHaveLength(1);
  });

  test('render contents of event details div', () => {
    EventWrapper.setState({ showDetails: true });
    expect(EventWrapper.find('.event-details').children()).toHaveLength(4);
  });
  

  test('render show/hide details button', () => {
    expect(EventWrapper.find('.details-btn')).toHaveLength(1);
  });
  
  test('click on "show details" button shows event details', () => {
    EventWrapper.setState({ showDetails: false});
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true)
  });

  test('click on "hide details" button hides event details', () => {
    EventWrapper.setState({ showDetails: true});
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false)
  });

});