import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

class App extends Component {
  constructor() {
    super();
    this.state = { route: 'page1' };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  render() {
    let page;
    if (this.state.route === 'page1') {
      page = <Page1 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === 'page2') {
      page = <Page2 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === 'page3') {
      page = <Page3 onRouteChange={this.onRouteChange} />;
    }
    return <div className="App">{page}</div>;
  }
}

export default App;
