import React, { Component, PropTypes } from 'react';
import Event from './Event';
import map from 'lodash/map';
import './Events.css';

class Events extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }

  handleSelect(key) {
    const { eventsRef, user } = this.props;

    eventsRef.child(key)
       .child('votes')
       .child(user.uid)
       .set(user.displayName);
  }

  handleDeselect(key) {
    const { eventsRef, user } = this.props;

    eventsRef.child(key)
       .child('votes')
       .child(user.uid)
       .remove();
  }

  render () {
    const { events, user } = this.props;

    return (
      <section className="Events">
        { map(events, (eventName, key) => (
          <Event
            key={key}
            user={user}
            {...eventName}
            handleSelect={() => this.handleSelect(key)}
            handleDeselect={() => this.handleDeselect(key)}
          />
        )) }
      </section>
    );
  }
}

Events.propTypes = {
  user: PropTypes.object.isRequired,
  eventsRef: PropTypes.object.isRequired,
  events: PropTypes.object
};

export default Events;
