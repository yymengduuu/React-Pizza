import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
    clearUserName(state) {
      state.userName = "";
    },
  },
});

export const { setUserName, clearUserName } = userSlice.actions;
export const selectUserName = (state) => state.user.userName;
export default userSlice.reducer;
