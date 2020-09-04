import React from 'react';
import logo from './logo.svg';
import Main from './main/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function AppLogo() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload, dude!
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
    </div>
  );
}

function App() {
  return (
    <Main/>
  )
}

export default App;
