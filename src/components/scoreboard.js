import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export default function Scoreboard () {

  const { wrong, right, message } = useContext(GlobalContext);

  return <div className="scoreContainer">
    <div className="scoreCorrect">{right}</div>
    <div className="scoreWrong">{wrong}</div>
    <div className="cb"></div>
    <div className="msg">{message}</div>
    <div className="cb"></div>
  </div>

}
