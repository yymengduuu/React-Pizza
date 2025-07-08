import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
    clearName(state) {
      state.userName = '';
    },
  },
});

export const { updateName, clearName } = userSlice.actions;
export const selectUserName = (state) => state.user.userName;
export default userSlice.reducer;
