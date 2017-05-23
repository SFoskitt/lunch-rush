import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Event.css';

class Event extends Component {
  render () {
    return (
      <article className="Event">
      </article>
    );
  }
}

Event.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Event;
