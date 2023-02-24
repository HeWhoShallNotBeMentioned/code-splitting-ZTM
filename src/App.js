import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';

class App extends Component {
  constructor() {
    super();
    this.state = { route: 'page1' };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Page1 onRouteChange={this.onRouteChange} />
        {/* <Page2 onRouteChange={this.onRouteChange} />
        <Page3 onRouteChange={this.onRouteChange} /> */}
      </div>
    );
  }
}

export default App;
