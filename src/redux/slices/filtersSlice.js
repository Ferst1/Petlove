


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  gender: '',
  type: '',
  location: ''
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryFilter(state, action) {
      state.category = action.payload;
    },
    setGenderFilter(state, action) {
      state.gender = action.payload;
    },
    setTypeFilter(state, action) {
      state.type = action.payload;
    },
    setLocationFilter(state, action) {
      state.location = action.payload;
    }
  }
});

export const { setCategoryFilter, setGenderFilter, setTypeFilter, setLocationFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
