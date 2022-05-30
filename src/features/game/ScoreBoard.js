import React from "react";
import { useSelector } from 'react-redux';
import { selectNumWrong } from './NumWrongSlice';
import { selectNumRight } from './NumRightSlice';

export function ScoreBoard() {

  const numRight = useSelector(selectNumRight);
  const numWrong = useSelector(selectNumWrong);

  return <div className="scoreContainer">
    <div className="scoreCorrect">{numRight}</div>
    <div className="scoreWrong">{numWrong}</div>
    <div className="cb"></div>
  </div>

}