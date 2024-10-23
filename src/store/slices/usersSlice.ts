import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  hasNextPage: false,
  isFetchingNextPage: false,
  selectedChatId: 0,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setHasNextPage(state, action) {
      state.hasNextPage = action.payload;
    },
    setIsFetchingNextPage(state, action) {
      state.isFetchingNextPage = action.payload;
    },
    setSelectedChatId(state, action) {
      state.selectedChatId = action.payload;
    },
  },
});

export const {
  setUsers,
  setHasNextPage,
  setIsFetchingNextPage,
  setSelectedChatId,
} = usersSlice.actions;
export default usersSlice.reducer;
