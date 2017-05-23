import React, { Component, PropTypes } from 'react';
import Event from './Event';
import map from 'lodash/map';
import './Events.css';

class Events extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section className="Events">
      </section>
    );
  }
}

Events.propTypes = {
  user: PropTypes,
  restaurantsRef: PropTypes.object,
  Events: PropTypes.object
};

export default Events;
