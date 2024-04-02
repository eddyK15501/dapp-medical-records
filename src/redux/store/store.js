/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import providerReducer from '../features/provider/providerSlice';

export const store = configureStore({
  reducer: { 
    provider: providerReducer,
  },
});
