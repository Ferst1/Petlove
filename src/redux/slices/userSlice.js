// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { signup as signupAPI, login as loginAPI, updateUser as updateUserAPI } from '../../services/authService';

// export const userSignup = createAsyncThunk('user/signup', async (userData, thunkAPI) => {
//   try {
//     const response = await signupAPI(userData.name, userData.email, userData.password);
//     return response;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const login = createAsyncThunk('user/login', async (credentials, thunkAPI) => {
//   try {
//     const response = await loginAPI(credentials.email, credentials.password);
//     return response;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data);
//   }
// });

// export const updateUser = createAsyncThunk('user/update', async (userData, thunkAPI) => {
//   try {
//     const response = await updateUserAPI(userData);
//     return response;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     token: null,
//     user: null,
//     error: null,
//     status: 'idle',
//     noticesFavorites: []
//   },
//   reducers: {
//     logout: (state) => {
//       state.token = null;
//       state.user = null;
//       state.noticesFavorites = [];
//     },
//     updateUserAvatar: (state, action) => {
//       if (state.user) {
//         state.user.avatar = action.payload;
//       }
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(userSignup.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(userSignup.fulfilled, (state, action) => {
//         state.token = action.payload.token;
//         state.user = action.payload;
//         state.noticesFavorites = action.payload.noticesFavorites || [];
//         state.status = 'succeeded';
//       })
//       .addCase(userSignup.rejected, (state, action) => {
//         state.error = action.payload;
//         state.status = 'failed';
//       })
//       .addCase(login.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.token = action.payload.token;
//         state.user = action.payload;
//         state.noticesFavorites = action.payload.noticesFavorites || [];
//         state.status = 'succeeded';
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.error = action.payload;
//         state.status = 'failed';
//       })
//       .addCase(updateUser.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(updateUser.fulfilled, (state, action) => {
//         state.user = { ...state.user, ...action.payload };
//         state.status = 'succeeded';
//       })
//       .addCase(updateUser.rejected, (state, action) => {
//         state.error = action.payload;
//         state.status = 'failed';
//       });
//   }
// });

// export const { logout, updateUserAvatar } = userSlice.actions;
// export default userSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signup as signupAPI, login as loginAPI, updateUser as updateUserAPI } from '../../services/authService';

export const userSignup = createAsyncThunk('user/signup', async (userData, thunkAPI) => {
  try {
    const response = await signupAPI(userData.name, userData.email, userData.password);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('user/login', async (credentials, thunkAPI) => {
  try {
    const response = await loginAPI(credentials.email, credentials.password);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateUser = createAsyncThunk('user/update', async (userData, thunkAPI) => {
  try {
    const response = await updateUserAPI(userData);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    user: null,
    error: null,
    status: 'idle',
    noticesFavorites: []
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.noticesFavorites = [];
    },
    updateUserAvatar: (state, action) => {
      if (state.user) {
        state.user.avatar = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload;
        state.noticesFavorites = action.payload.noticesFavorites || [];
        state.status = 'succeeded';
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload;
        state.noticesFavorites = action.payload.noticesFavorites || [];
        state.status = 'succeeded';
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.status = 'succeeded';
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      });
  }
});

export const { logout, updateUserAvatar } = userSlice.actions;
export default userSlice.reducer;
