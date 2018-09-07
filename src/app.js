import ReactDom from 'react-dom';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './app.less';

// to enable module hot reload(instead of page reload)
if (module.hot) {
  module.hot.accept();
}

class App extends Component {
  render() {
    return (
      <span>Scaffold</span>
    );
  }
}

const HotApp = hot(module)(App);


ReactDom.render(<HotApp />, document.getElementById('root'));
