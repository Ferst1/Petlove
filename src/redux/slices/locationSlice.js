import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchLocations = createAsyncThunk(
  'location/fetchLocations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://petlove.b.goit.study/api/cities');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    searchValue: '',
    locations: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    clearSearchValue(state) {
      state.searchValue = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.locations = action.payload;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setSearchValue, clearSearchValue } = locationSlice.actions;

export default locationSlice.reducer;
