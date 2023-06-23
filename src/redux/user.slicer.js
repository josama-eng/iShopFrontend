import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const userSlicer = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    saveUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { saveUser, removeUser, setToken } = userSlicer.actions;

export default userSlicer.reducer;
