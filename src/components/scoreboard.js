import React from "react";

export default function Scoreboard ({correct, wrong, msg}) {

  return <div className="scoreContainer">
    <div className="scoreCorrect">{correct}</div>
    <div className="scoreWrong">{wrong}</div>
    <div className="cb"></div>
    <div className="msg">{msg}</div>
    <div className="cb"></div>
  </div>

}