import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api/notices/categories';


export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (endpoint,thunkAPI) => {
        try {
            const response = await axios.get(endpoint);
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    }
);