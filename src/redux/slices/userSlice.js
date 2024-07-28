import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login as apiLogin, signup as apiSignup, updateUser as apiUpdateUser, updateAvatar as apiUpdateAvatar } from '../../services/authService';

export const signup = createAsyncThunk('user/signup', async ({ name, email, password }) => {
  const user = await apiSignup(name, email, password);
  return user;
});

export const login = createAsyncThunk('user/login', async ({ email, password }) => {
  const user = await apiLogin(email, password);
  return user;
});

export const updateUser = createAsyncThunk('user/updateUser', async (userData) => {
  const updatedUser = await apiUpdateUser(userData);
  return updatedUser;
});

export const updateAvatar = createAsyncThunk('user/updateAvatar', async ({ uid, avatar }) => {
  const updatedAvatar = await apiUpdateAvatar(uid, avatar);
  return { uid, avatar: updatedAvatar.avatar };
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.status = 'succeeded';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.status = 'succeeded';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        if (state.user) {
          state.user.avatar = action.payload.avatar;
        }
        state.status = 'succeeded';
      })
      .addMatcher(action => action.type.endsWith('/pending'), (state) => {
        state.status = 'loading';
      })
      .addMatcher(action => action.type.endsWith('/rejected'), (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
