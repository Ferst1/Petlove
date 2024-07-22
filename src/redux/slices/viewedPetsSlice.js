
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  viewedPets: [],
};

const viewedPetsSlice = createSlice({
  name: 'viewedPets',
  initialState,
  reducers: {
    addViewedPet(state, action) {
      if (!state.viewedPets.find(pet => pet._id === action.payload._id)) {
        state.viewedPets.push(action.payload);
      }
    },
  },
});

export const { addViewedPet } = viewedPetsSlice.actions;
export default viewedPetsSlice.reducer;
