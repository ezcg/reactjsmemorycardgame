import Card  from "./card";
import React from "react";

let helpersBase = require('../helpers/base');

export default function Table ({ deckArr, mngActiveCards }) {

  let extraStyle = {};
  if (helpersBase.getDeviceType() === 'mobile') {
    extraStyle = {width: '326px'};
  }

  return <div className="tableCont" style={extraStyle}>
    <div className="cb"></div>
    {deckArr.map((cardObj, i) => {
      return <div className="cardCont" key={'i_'+ i} onClick={() => mngActiveCards(cardObj)}>
        <Card cardObj={cardObj} />
        <div className="cb"></div>
      </div>
    })}
    <div style={{clear:'both'}}></div>
  </div>

}
