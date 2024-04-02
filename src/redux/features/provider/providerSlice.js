import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  connection: {},
};

export const providerSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {
    connect: (state, action) => {
      return { ...state.connection, connection: action.payload }
    },
  },
});

export const { connect } = providerSlice.actions;

export default providerSlice.reducer;