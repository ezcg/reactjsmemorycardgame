import React from 'react'
import './App.css';
import Table from './components/table.js';
import { GlobalProvider } from './context/GlobalState';
import Scoreboard from "./components/scoreboard";

function App() {

  return (
    <GlobalProvider>
      <div className="App">
      <Scoreboard />
      <Table />
      </div>
    </GlobalProvider>
  );

}

export default App;
