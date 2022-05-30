import { configureStore } from '@reduxjs/toolkit';
import numRightReducer from '../features/game/NumRightSlice';
import numWrongReducer from '../features/game/NumWrongSlice';
import activeCardsArrReducer from '../features/game/ActiveCardsArrSlice';

export const store = configureStore({
  reducer: {
    numRight: numRightReducer,
    numWrong: numWrongReducer,
    activeCardsArr: activeCardsArrReducer
  },
});
