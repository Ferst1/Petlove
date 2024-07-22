import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    category: [],
    gender: [],
    type: [],
    location: []
  }
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload ? [action.payload] : [];
    },
    setGenderFilter: (state, action) => {
      state.filters.gender = action.payload ? [action.payload] : [];
    },
    setTypeFilter: (state, action) => {
      state.filters.type = action.payload ? [action.payload] : [];
    },
    setLocationFilter: (state, action) => {
      state.filters.location = action.payload ? [action.payload] : [];
    }
  }
});

export const { setCategoryFilter, setGenderFilter, setTypeFilter, setLocationFilter } = noticesSlice.actions;
export default noticesSlice.reducer;
