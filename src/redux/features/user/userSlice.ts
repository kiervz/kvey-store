import { createSlice } from '@reduxjs/toolkit';
import { User } from './types';

const initialState =  {
  user: {
    data: {},
    token: '',
    tokenType: ''
  }
};

const reducers = {
  setUser(state: User, action: any) {
    state.user.data = action.payload.user;
    state.user.token = action.payload.token;
    state.user.tokenType = action.payload.token_type;
    localStorage.setItem(`token:${import.meta.env.VITE_APP_PERSIST_KEY}`,  action.payload.token);
  },
  removeUser(state: User) {
    state.user = initialState.user;
    localStorage.removeItem(`token:${import.meta.env.VITE_APP_PERSIST_KEY}`);
    localStorage.removeItem(`persist:${import.meta.env.VITE_APP_PERSIST_KEY}`);
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers
});

export const userAction = userSlice.actions;

export default userSlice;
