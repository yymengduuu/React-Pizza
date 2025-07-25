import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  priorityFee: 0,
  pizzaPrice: 0,
  orders: [],
  currentOrder: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
    setPriorityFee(state, action) {
      state.priorityFee = action.payload;
    },
    setPizzaPrice(state, action) {
      state.pizzaPrice = action.payload;
    },
    setOrders(state, action) {
      state.orders = action.payload;
    },
    setCurrentOrder(state, action) {
      state.currentOrder = action.payload;
    },
  },
});

export const {
  setTotalPrice,
  setPriorityFee,
  setPizzaPrice,
  setOrders,
  setCurrentOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
