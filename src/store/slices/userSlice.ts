import { createSlice } from "@reduxjs/toolkit";

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  //users info
}

const initialState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
