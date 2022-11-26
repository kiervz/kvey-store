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
  },
  removeUser(state: User) {
    state.user.data = initialState;
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers
});

export const userAction = userSlice.actions;

export default userSlice;
