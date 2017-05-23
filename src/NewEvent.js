import React, { Component, PropTypes } from 'react';
import './NewEvent.css';

class NewEvent extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.name) return false;

    this.props.eventsRef.push({ name: this.state.name });
    this.setState({ name: '' });
  }

  render() {
    const { name } = this.state;

    return (
      <form
        className="NewEvent"
      >
        <input
          type="text"
          value={ name }
          placeholder="Name of Event"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button
          onClick={this.handleSubmit}
          disabled={!name}
        >
          Submit
        </button>
      </form>
    );
  }
}

NewEvent.propTypes = {
  eventsRef: PropTypes.object
};

export default NewEvent;
