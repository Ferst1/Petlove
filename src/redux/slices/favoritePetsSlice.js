import { createSlice } from '@reduxjs/toolkit';

const favoritePetsSlice = createSlice({
  name: 'favoritePets',
  initialState: {
    pets: [],
    showFavorites: false
  },
  reducers: {
    addFavoritePet: (state, action) => {
      const existingPet = state.pets.find(pet => pet._id === action.payload._id);
      if (!existingPet) {
        state.pets.push(action.payload);
      }
    },
    removeFavoritePet: (state, action) => {
      state.pets = state.pets.filter(pet => pet._id !== action.payload._id);
    },
    setShowFavorites: (state, action) => {
      state.showFavorites = action.payload;
    }
  }
});

export const { addFavoritePet, removeFavoritePet, setShowFavorites } = favoritePetsSlice.actions;

export default favoritePetsSlice.reducer;
