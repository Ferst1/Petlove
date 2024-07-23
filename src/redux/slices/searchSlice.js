import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://petlove.b.goit.study/api';

export const fetchAllPetsByQuery = createAsyncThunk('search/fetchAllPetsByQuery', async ({ query }) => {
  console.log(`Fetching all pets for query: ${query}`);
  const fetchPage = async (page) => {
    const response = await axios.get(`${API_BASE_URL}/notices`, {
      params: { page, perPage: 6, query }
    });
    return response.data;
  };

  let currentPage = 1;
  const allResults = new Map(); // Используем Map для проверки уникальности элементов
  let totalPages = 1;

  do {
    const data = await fetchPage(currentPage);
    data.results.forEach(pet => {
      allResults.set(pet._id, pet);
    });
    totalPages = data.totalPages;
    currentPage += 1;
  } while (currentPage <= totalPages);

  console.log('Fetched all pets:', Array.from(allResults.values()));
  return Array.from(allResults.values());
});

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    pets: [],
    totalItems: 0,
    loading: false,
    error: null,
    query: '',
    currentPage: 1
  },
  reducers: {
    setQuery(state, action) {
      console.log(`Setting query: ${action.payload}`);
      state.query = action.payload;
      state.currentPage = 1;
    },
    setPage(state, action) {
      console.log(`Setting page: ${action.payload}`);
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPetsByQuery.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllPetsByQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.pets = action.payload;
        state.totalItems = action.payload.length;
        console.log('Fetched all pets:', state.pets);
      })
      .addCase(fetchAllPetsByQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setQuery, setPage } = searchSlice.actions;

export default searchSlice.reducer;
