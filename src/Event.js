import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Event.css';

class Event extends Component {
  render () {
    const { name, votes, user, handleSelect, handleDeselect } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);

    return (
      <article className="Event">
        <h2 className="Event--name">{ name }</h2>
        <p className="Event--count">
          Total Votes: {(votes && Object.keys(votes).length) || 0}
        </p>
        <ul className="Event--votes">
          { votes && map(votes, (user, key) => <li key={key}>{ user }</li>) }
        </ul>
        {
          userHasSelected
          ? <button onClick={handleDeselect} className="block destructive">Actually, no</button>
          : <button onClick={handleSelect} className="block">I'd go here</button>
        }
      </article>
    );
  }
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func.isRequired,
  handleDeselect: PropTypes.func.isRequired
};

export default Event;
