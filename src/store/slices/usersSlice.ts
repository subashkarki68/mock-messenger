import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  hasNextPage: false,
  isFetchingNextPage: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      console.log("🚀 ~ setUsers ~ action:", action.payload);
      state.users = action.payload;
    },
    setHasNextPage(state, action) {
      state.hasNextPage = action.payload;
    },
    setIsFetchingNextPage(state, action) {
      state.isFetchingNextPage = action.payload;
    },
  },
});

export const { setUsers, setHasNextPage, setIsFetchingNextPage } =
  usersSlice.actions;
export default usersSlice.reducer;
