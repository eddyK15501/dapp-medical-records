import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  connection: null,
};

export const providerSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {
    connect: (state, action) => {
      state.connection = action.payload;
    },
  },
});

export const { connect } = providerSlice.actions;

export default providerSlice.reducer;