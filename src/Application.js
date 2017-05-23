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
    this.eventsRef = null;
    this.state = {
      user: null
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user });
      this.eventsRef = database.ref('events');
      this.eventsRef.on('value', snapshot => {
        this.setState({ events: snapshot.val() });
      });
    });
  }

  render() {
    const { user, events } = this.state;

    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Wander List</h1>
        </header>
        { user
          ? <div>
              <NewEvent
                eventsRef={this.eventsRef}
              />
              {
                events &&
                <Events events={events} user={user} eventsRef={this.eventsRef}/>
              }
              <CurrentUser user={user} />
            </div>
          : <SignIn />
        }
      </div>
    );
  }
}

export default Application;
