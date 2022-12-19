import { createSlice } from '@reduxjs/toolkit';
import { Cart } from './types';

export interface CartProps {
  cart: Cart[];
  subTotal: number;
  subTotalItems: number;
  totalCartItems: number
}

const initialState =  {
  cart: [],
  subTotal: 0,
  subTotalItems: 0,
  totalCartItems: 0
};

const reducers = {
  setCart(state: CartProps, action: any) {
    state.cart = action.payload;
  },
  removeCartItem(state: CartProps, action: any) {
    const carts = state.cart;
    
    state.cart = carts.filter(item => item.id !== action.payload.cartId);
  },
  removeCart(state: CartProps) {
    state.cart = initialState.cart;
    state.subTotal = initialState.subTotal;
    state.subTotalItems = initialState.subTotalItems; 
    state.totalCartItems = initialState.totalCartItems;
  },
  setSubTotal(state: CartProps, action: any) {
    state.subTotal = action.payload;
  },
  setSubTotalItems(state: CartProps, action: any) {
    state.subTotalItems = action.payload;
  },
  setTotalCartItems(state: CartProps, action: any) {
    state.totalCartItems = action.payload;
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers
});

export const cartAction = cartSlice.actions;

export default cartSlice;
