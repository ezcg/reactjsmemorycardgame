import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  status: 'idle',
};

export const NumWrongSlice = createSlice({
  name: 'numWrong',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementNumWrong: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    resetNumWrong: (state) => {
      state.value = 0
    }
  },
});

export const { incrementNumWrong } = NumWrongSlice.actions;
export const { resetNumWrong } = NumWrongSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectNumWrong = (state) => state.numWrong.value;

export default NumWrongSlice.reducer;
