import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  connection: null,
  chainId: null,
};

export const providerSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {
    setConnection: (state, action) => {
      state.connection = action.payload;
    },
    setChainId: (state, action) => {
      state.chainId = action.payload;
    },
  },
});

export const { setConnection, setChainId } = providerSlice.actions;

export default providerSlice.reducer;
