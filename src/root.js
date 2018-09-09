import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import UserList from 'presentationals/UserList';
import './app.less';

class App extends Component {
  render() {
    return (
      <Fragment>
        <span>Scaffold</span>
        <UserList />
      </Fragment>

    );
  }
}

// separate hot(module)(App) from ReactDOM.render into different files
export default hot(module)(App);
