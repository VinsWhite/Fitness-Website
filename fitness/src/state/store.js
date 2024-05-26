import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filterSlice';

const store = configureStore({ // creiamo lo store globale e in questo caso lo usiamo solo per il filtro
  reducer: {
    filters: filtersReducer
  }
});


export default store;
