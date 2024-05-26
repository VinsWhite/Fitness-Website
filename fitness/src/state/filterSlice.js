import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: null,
  category: null,
  activity: null
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action) {
      const { name, value } = action.payload;
      // qui ho riscontrato un problema con il filtro, essendo che ho utilizzato un oggetto (di solito utilizzero i json, ma il progetto sembrava essere più piccolino e avevo iniziato a usare un oggetto)
      // per eseguire quindi il filtraggio dei dati è necessario convertire in stringa
      const transformedValue = typeof value === 'object' && value !== null ? value.value : value;
      state[name] = transformedValue;
    }
  }
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
