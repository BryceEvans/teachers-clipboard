import React, { Component } from 'react';
import TopBar from './components/TopBar/TopBar';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
