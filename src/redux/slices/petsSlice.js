
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://petlove.b.goit.study/api';

export const addNotice = createAsyncThunk('pets/addNotice', async ({ token, ...data }, thunkAPI) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    // Пример запроса на добавление питомца
    const response = await axios.post(`${API_BASE_URL}/notices`, data, config);
    return response.data;
  } catch (error) {
    console.error("Error from API:", error.response.data);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchPets = createAsyncThunk('pets/fetchPets', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/notices`);
    return response.data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    pets: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pets = action.payload;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addNotice.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pets.push(action.payload);
      })
      .addCase(addNotice.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default petsSlice.reducer;
