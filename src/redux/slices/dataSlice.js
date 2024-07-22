import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://petlove.b.goit.study/api';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const categories = await axios.get(`${API_BASE_URL}/notices/categories`);
  const genders = await axios.get(`${API_BASE_URL}/notices/sex`);
  const types = await axios.get(`${API_BASE_URL}/notices/species`);
  const locations = await axios.get(`${API_BASE_URL}/notices`);

  return {
    categories: categories.data,
    genders: genders.data,
    types: types.data,
    locations: locations.data.results.map(result => result.location)
  };
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    categories: [],
    genders: [],
    types: [],
    locations: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.categories;
        state.genders = action.payload.genders;
        state.types = action.payload.types;
        state.locations = action.payload.locations;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default dataSlice.reducer;
