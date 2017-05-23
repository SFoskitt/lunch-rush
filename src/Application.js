import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewEvent from './NewEvent';
import Events from './Events';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Wander List</h1>
        </header>
      </div>
    );
  }
}

export default Application;
