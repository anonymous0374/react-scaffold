import ReactDom from 'react-dom';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './app.less';

class App extends Component {
  render() {
    return (
      <span>Scaffold</span>
    );
  }
}

const HotApp = hot(module)(App);


ReactDom.render(<HotApp />, document.getElementById('root'));
