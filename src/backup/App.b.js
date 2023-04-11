import React from 'react';
import Versions from './syscom/versions.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {React.version}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Sometime this week!
        </a>
      </header>
      <p>
        <Versions />
      </p>
    </div>
  );
}

export default App;
