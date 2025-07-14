import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/Cart/cartSlice';
import userReducer from './features/User/userSlice';
import orderReducer from './features/Order/orderSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
  },
});

export default store;
