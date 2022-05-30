import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  status: 'idle',
};

export const ActiveCardsArrSlice = createSlice({
  name: 'activeCardsArr',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setActiveCardsArr: (state, action) => {
      state.value = [...action.payload]
    },
  },
});

export const { setActiveCardsArr } = ActiveCardsArrSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectActiveCardsArr = (state) => state.activeCardsArr.value;

export default ActiveCardsArrSlice.reducer;
