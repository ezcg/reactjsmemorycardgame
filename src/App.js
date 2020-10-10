import React from 'react'
import './App.css';
import Dealer from './components/dealer.js';
import { GlobalProvider } from './context/GlobalState';
import Scoreboard from "./components/scoreboard";

function App() {

  return (
    <GlobalProvider>
      <div className="App">
      <Scoreboard />
      <Dealer />
      </div>
    </GlobalProvider>
  );

}

export default App;
