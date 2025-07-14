import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  priorityFee: 0,
  pizzaPrice: 0,
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
  },
});

export const { setTotalPrice, setPriorityFee, setPizzaPrice } =
  orderSlice.actions;
export default orderSlice.reducer;
