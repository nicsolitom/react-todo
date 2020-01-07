import React from 'react';
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
