import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the Todo Component
import Todo from './Todo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Todo />
      </header>
    </div>
  );
}

export default App;
