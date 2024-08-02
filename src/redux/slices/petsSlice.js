
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from '../../services/firebase';
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';

// Действие для добавления питомца
export const addPetToFirestore = createAsyncThunk(
  'pets/addPetToFirestore',
  async (data, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(firestore, 'pets'), data);
      return { id: docRef.id, ...data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Действие для удаления питомца
export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (id, { rejectWithValue }) => {
    try {
      const docRef = doc(firestore, 'pets', id);
      await deleteDoc(docRef);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Действие для получения питомцев
export const fetchPets = createAsyncThunk(
  'pets/fetchPets',
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'pets'));
      const pets = [];
      querySnapshot.forEach((doc) => {
        pets.push({ id: doc.id, ...doc.data() });
      });
      return pets;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
      .addCase(addPetToFirestore.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPetToFirestore.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pets.push(action.payload);
      })
      .addCase(addPetToFirestore.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deletePet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pets = state.pets.filter(pet => pet.id !== action.payload);
      })
      .addCase(deletePet.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
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
      });
  },
});

export default petsSlice.reducer;
