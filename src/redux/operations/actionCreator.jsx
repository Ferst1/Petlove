


import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api/notices';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    try {
      const response = await axios.get('/categories');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchGender = createAsyncThunk(
  'categories/fetchGender',
  async () => {
    try {
      const response = await axios.get('/sex');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchSpecies = createAsyncThunk(
  'categories/fetchSpecies',
  async () => {
    try {
      const response = await axios.get('/species');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export const fetchLocations = createAsyncThunk(
  'categories/fetchLocations',
  async () => {
    try {
      const response = await axios.get('/notices/locations');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
)
