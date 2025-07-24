import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.unitprice * item.quantity;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        item.totalPrice = item.unitprice * item.quantity;
      }
      if (item.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCartItems = (state) => state.cart.items;

export const totalCartPrice = createSelector([getCartItems], (items) =>
  items.reduce((sum, item) => sum + item.totalPrice, 0),
);

export const totalCartQuantity = createSelector([getCartItems], (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0),
);

export const currentCartQuantity = (id) =>
  createSelector(
    [getCartItems],
    (items) => items.find((item) => item.id === id)?.quantity || 0,
  );
