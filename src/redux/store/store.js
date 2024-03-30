/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';

const emptyReducer = (state = {}, action) => {
  return state;
};

export const store = configureStore({
  reducer: { emptyReducer },
});
