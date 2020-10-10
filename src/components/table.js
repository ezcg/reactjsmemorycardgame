import React, { useState, useContext } from 'react'
import Card from '../components/card.js'
import { GlobalContext } from '../context/GlobalState';

let helpersBase = require('../helpers/base');

export default function Table () {

  const { reset, setWrong, right, setRight, setMessage, gameover, setGameover } = useContext(GlobalContext);

  const [activeCardsArr, setActiveCardsArr] = useState([]);

  const deviceType = helpersBase.getDeviceType();
  const [deckArr, setDeckArr] = useState(helpersBase.getDeckArr(deviceType));

  function restart() {
    reset();
    let deckArr = helpersBase.getDeckArr(deviceType);
    setDeckArr(deckArr);
  }

  // Make sure the card clicked on is valid and then evaluate if 2 are currently clicked on
  function mngActiveCards(cardObj) {
    // Prevent clicking on the same card twice
    if (activeCardsArr.length === 1 && activeCardsArr[0]['rank'] === cardObj['rank'] && activeCardsArr[0]['suit'] === cardObj['suit']) {
      return;
    }
    // If any already matched card was clicked on, skip
    if (cardObj['suit'] === 'empty') {
      return;
    }
    // Prevent clicking on a third card while the previous 2 cards are evaluated
    if (activeCardsArr.length === 2) {
      return;
    }
    // If this is the second click, the second card clicked on has not been added to the activeCardsArr yet.
    if (activeCardsArr.length < 2) {
      let tmpActiveCardsArr = [...activeCardsArr, cardObj];
      setActiveCardsArr(tmpActiveCardsArr);
      if (tmpActiveCardsArr.length === 2) {
        setTimeout(evaluatePicks, 700, tmpActiveCardsArr);
      }
    }

  }

  // Evaluate if the 2 cards clicked on match, set score, messaging, set activeCardsArr to empty
  function evaluatePicks(activeCardsArr) {

    if (activeCardsArr[0]['rank'] === activeCardsArr[1]['rank']) {
      setRight(1);
      if (right === deckArr.length/2 - 1) {
        setMessage("VICTORY!!!");
        setGameover(1);
      }
      deckArr.forEach((cardObj, i) => {
        // set the back of the card to be displayed
        if (cardObj['rank'] === activeCardsArr[0]['rank'] && cardObj['suit'] === activeCardsArr[0]['suit']) {
           deckArr[i]['suit'] = 'empty';
        } else if (cardObj['rank'] === activeCardsArr[1]['rank'] && cardObj['suit'] === activeCardsArr[1]['suit']) {
          deckArr[i]['suit'] = 'empty';
        }
      });
    } else {
      setWrong(1);
    }
    setActiveCardsArr([]);

  }

  let restartBtnStyle = gameover ? {display:'block'} : {display:'none'};

  let extraStyle = {};
  if (deviceType === 'mobile') {
    extraStyle = {width: '326px'};
  }

  return <div className="tableCont" style={extraStyle}>
    <button className='restartBtn' style={restartBtnStyle} onClick={() => restart()}>Play Again?</button>
    <div className="cb"></div>
    {deckArr.map((cardObj, i) => {
      return <div className="cardCont" key={'i_'+ i} onClick={() => mngActiveCards(cardObj)}>
        <Card
          cardObj={cardObj}
          activeCardsArr={activeCardsArr}
        />
        <div className="cb"></div>
      </div>
    })}
    <div style={{clear:'both'}}></div>
  </div>

}
