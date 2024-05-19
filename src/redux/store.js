import { configureStore } from '@reduxjs/toolkit';
import staticDataReducer from './features/staticData/staticDataSlice';

const store = configureStore({
  reducer: {
    staticData: staticDataReducer,
  },
});

export default store;