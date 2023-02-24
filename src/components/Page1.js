import React from 'react';
import logo from '../logo.svg';

const Page1 = (props) => {
  return (
    <div>
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
      <button onClick={() => props.onRouteChange('page2')}>Page 2</button>
      <button onClick={() => props.onRouteChange('page3')}>Page 3</button>
    </div>
  );
};

export default Page1;
