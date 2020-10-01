import React, { useState } from 'react'
import './App.css';
import Table from './components/table.js';
let helpersBase = require('./helpers/base');

function App({deviceType}) {

  function getDeckArr(deviceType) {
    let deckArr = helpersBase.createDeck(deviceType);
    deckArr = helpersBase.shuffle(deckArr);
    return deckArr;
  }

  const [numPlays, setNumPlays] = useState(1);
  const [deckArr, setDeckArr] = useState(getDeckArr(deviceType));

  function restart() {
    let deckArr = getDeckArr(deviceType);
    setNumPlays(numPlays + 1);
    setDeckArr(deckArr);
  }

  return (
    <div key={"numPlays_" + numPlays} className="App">
    <Table
      deckArr={deckArr}
      restart = {() => restart()}
      deviceType = {deviceType}
    />
    </div>
  );
}

export default App;
