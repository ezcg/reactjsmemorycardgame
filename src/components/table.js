import React, { useState } from 'react'
import Card from '../components/card.js'
import Scoreboard from '../components/scoreboard.js'

export default function Table ({deckArr, restart, deviceType}) {

  const [gameover, setGameover] = useState(0);
  const [msg, setMsg] = useState('');
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [activeCardsArr, setActiveCardsArr] = useState([]);
  const [clicks, setClicks] = useState(0);

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
    if (activeCardsArr.length < 2) {
      activeCardsArr.push(cardObj);
      setActiveCardsArr(activeCardsArr);
    }
    if (activeCardsArr.length === 2) {
      setTimeout(evaluatePicks, 700, activeCardsArr);
    }
    setClicks(clicks + 1);// this is necessary to get it to re-render, setActiveCardsArr above does not trigger re-render!

  }

  function evaluatePicks(activeCardsArr) {

    if (activeCardsArr[0]['rank'] === activeCardsArr[1]['rank']) {
      setCorrect(correct + 1);
      if (correct === deckArr.length/2 - 1) {
        setMsg("VICTORY!!!");
        setGameover(1);
      }
      deckArr.forEach((cardObj, i) => {
        if (cardObj['rank'] === activeCardsArr[0]['rank'] && cardObj['suit'] === activeCardsArr[0]['suit']) {
           deckArr[i]['suit'] = 'empty';
        } else if (cardObj['rank'] === activeCardsArr[1]['rank'] && cardObj['suit'] === activeCardsArr[1]['suit']) {
          deckArr[i]['suit'] = 'empty';
        }
      });
    } else {
      setWrong(wrong + 1);
    }
    setActiveCardsArr([]);

  }

  let restartBtnStyle = gameover ? {display:'block'} : {display:'none'};

  let extraStyle = {};
  if (deviceType === 'mobile') {
    extraStyle = {width: '326px'};
  }

  return <div className="tableCont" key='table' style={extraStyle}>
    <Scoreboard correct={correct} wrong={wrong} msg={msg} />
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
