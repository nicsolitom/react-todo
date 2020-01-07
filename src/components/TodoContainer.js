import React from 'react';
import Title from './Title';
import TodoList from './TodoList';

export default function TodoContainer() {
  return (
    <header className="App-header">
      <Title />
      <TodoList />
    </header>
  );
}
