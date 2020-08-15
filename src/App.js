import React, { Component } from 'react';

import GlobalStyle from './styles/global';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Dashboard />
      </div>
    );
  }
}

export default App;
