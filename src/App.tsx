import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 2
        </a>
        <a href="/.auth/login/github">Login</a>
      </header>
    </div>
  );
}

export default App;
