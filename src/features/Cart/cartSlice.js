import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  // item: [
  //   {
  //     pizzaId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
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
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        item.totalPrice = item.unitPrice * item.quantity;
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

export const totalCartPrice = (state) => {
  return state.cart.items.reduce((sum, item) => sum + item.totalPrice, 0);
};

export const totalCartQuantity = (state) => {
  return state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
};

export const currentCartQuantity = (id) => (state) => {
  return state.cart.items.find((item) => item.id === id)?.quantity || 0;
};
