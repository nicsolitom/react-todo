import React from 'react';
// import logo from './logo.svg';
import '../styles/App.scss';
import TodoContainer from './TodoContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer />
      </header>
    </div>
  );
}

export default App;
