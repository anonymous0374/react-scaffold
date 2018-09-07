import ReactDom from 'react-dom';
import React, { Component } from 'react';
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

ReactDom.render(<App />, document.getElementById('root'));
