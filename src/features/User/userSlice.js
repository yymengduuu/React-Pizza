import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  phone: '',
  address: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    },
    clearUser(state) {
      return {
        ...initialState,
      };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
