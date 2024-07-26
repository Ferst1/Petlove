
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import userReducer from "./redux/slices/userSlice";
import noticesReducer from "./redux/slices/noticesSlice";
import locationReducer from "./redux/slices/locationSlice";
import { modalReducer } from "./redux/modal/modalSlice";
import favoritePetsReducer from './redux/slices/favoritePetsSlice';
import dataReducer from './redux/slices/dataSlice';
import filtersReducer from './redux/slices/filtersSlice';
import viewedPetsReducer from './redux/slices/viewedPetsSlice';
import searchReducer from './redux/slices/searchSlice';
import sortReducer from './redux/slices/sortSlice';
import petsReducer from './redux/slices/petsSlice';

const rootReducer = combineReducers({
  user: userReducer,
  notices: noticesReducer,
  modal: modalReducer,
  location: locationReducer,
  favoritePets: favoritePetsReducer,
  data: dataReducer,
  filters: filtersReducer,
  viewedPets: viewedPetsReducer,
  search: searchReducer,
  sort: sortReducer,
  pets: petsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['user', 'notices', 'location', 'favoritePets', 'viewedPets'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
