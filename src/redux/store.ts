import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const reducer = combineReducers({
  user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger]
});

export default store;