import React from 'react';
import { ScoreBoard } from './features/game/ScoreBoard';
import { Table } from './features/game/Table';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScoreBoard />
        <Table />
      </header>
    </div>
  );
}

export default App;
