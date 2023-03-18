import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
//import Page2 from './components/Page2';
//import Page3 from './components/Page3';

class App extends Component {
  constructor() {
    super();
    this.state = { route: 'page1', component: '' };
  }

  onRouteChange = (route) => {
    // No Code Splitting
    // this.setState({ route: route });

    // With Code Splitting
    if (route === 'page1') {
      this.setState({ route: route });
    } else if (route === 'page2') {
      import('./components/Page2').then((Page2) =>
        this.setState({ route: route, component: Page2.default })
      );
    } else if (route === 'page3') {
      import('./components/Page3').then((Page3) =>
        this.setState({ route: route, component: Page3.default })
      );
    }
  };
  render() {
    let page;
    // if (this.state.route === 'page1') {
    //   page = <Page1 onRouteChange={this.onRouteChange} />;
    // } else if (this.state.route === 'page2') {
    //   page = <Page2 onRouteChange={this.onRouteChange} />;
    // } else if (this.state.route === 'page3') {
    //   page = <Page3 onRouteChange={this.onRouteChange} />;
    // }

    if (this.state.route === 'page1') {
      page = <Page1 onRouteChange={this.onRouteChange} />;
    } else {
      return <this.state.component onRouteChange={this.onRouteChange} />;
    }
    return <div className="App">{page}</div>;
  }
}

export default App;
