import React, { useState } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux';
import { resetNumWrong, incrementNumWrong } from './NumWrongSlice';
import { resetNumRight, incrementNumRight, selectNumRight } from './NumRightSlice'
import { setActiveCardsArr, selectActiveCardsArr } from './ActiveCardsArrSlice'

let helpersBase = require('../../helpers/base');

export function Table() {

  const dispatch = useDispatch();
  const activeCardsArr = useSelector(selectActiveCardsArr);
  let numRight = useSelector(selectNumRight)

  let [deckArr, setDeckArr] = useState(helpersBase.getDeckArr());
  let [gameOver, setGameOver] = useState(0)
  let [message, setMessage] = useState("")

  function restart() {
    dispatch(resetNumWrong())
    dispatch(resetNumRight())
    dispatch(setActiveCardsArr([]))
    let deckArr = helpersBase.getDeckArr()
    setDeckArr(deckArr)
    setMessage("")
    setGameOver(0)
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
    let numCardsClickedOn = activeCardsArr.length
    if (numCardsClickedOn < 2) {
      let tmpActiveCardsArr = [...activeCardsArr, cardObj];
      dispatch(setActiveCardsArr(tmpActiveCardsArr))
      if (tmpActiveCardsArr.length === 2) {
        setTimeout(evaluatePicks, 700, tmpActiveCardsArr);
      }
    }
  }

  // Evaluate if the 2 cards clicked on match, set score, messaging, set activeCardsArr to empty
  function evaluatePicks(activeCardsArr) {
    if (activeCardsArr[0]['rank'] === activeCardsArr[1]['rank']) {
      dispatch(incrementNumRight())
      console.log("numRight:", numRight, deckArr.length/2 - 1)
      if (numRight === deckArr.length/2 - 1) {
        setMessage("VICTORY!!!");
        setGameOver(1);
      }
      for(let i in deckArr) {
        let cardObj = deckArr[i]
        // set the 'correct checkmark' to be displayed if the rank and suit between the 2 active cards are the same
        if (cardObj['rank'] === activeCardsArr[0]['rank'] && cardObj['suit'] === activeCardsArr[0]['suit']) {
          let obj = {suit:'correctcheckmark', rank:deckArr[i]['rank']}
          deckArr[i] = {...deckArr[i], ...obj}
        } else if (cardObj['rank'] === activeCardsArr[1]['rank'] && cardObj['suit'] === activeCardsArr[1]['suit']) {
          let obj = {suit:'correctcheckmark', rank:deckArr[i]['rank']}
          deckArr[i] = {...deckArr[i], ...obj}
        }
      }
    } else {
      dispatch(incrementNumWrong())
    }
    dispatch(setActiveCardsArr([]))
  }

  let restartBtnStyle = gameOver ? {display:'block'} : {display:'none'};
  let key = deckArr.reduce((accumulator, obj) => { return obj['suit'] + accumulator}, "")

  return <div className="tableCont" key={key}>
    <div>
      <span className="msg">{message}</span>
      <button className='restartBtn' style={restartBtnStyle} onClick={() => restart()}>Play Again?</button>
      <div className="cb"></div>
    </div>
    {deckArr.map((cardObj, i) => {
      return <div className="cardCont" key={i+ '_'+ cardObj['suit']} onClick={() => mngActiveCards(cardObj)}>
        <Card cardObj={cardObj} />
        <div className="cb"></div>
      </div>
    })}
    <div style={{clear:'both'}}></div>
  </div>

}
