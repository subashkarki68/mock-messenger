import { Message } from "@/interfaces/message";
import { createSlice } from "@reduxjs/toolkit";
import { createUserInitial } from "../../lib/userUtils";

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string;
  gender?: string;
  latestMessage?: Message[];
  //users info
}

export interface StoreUserInfo extends UserInfo {
  userInitials: string;
  messages?: Message[];
}

const initialState: StoreUserInfo = {
  id: 0,
  name: "",
  email: "",
  avatarUrl: "",
  userInitials: "",
  gender: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const {
        id,
        name,
        email,
        avatarUrl = "https://www.ruchirajkarki.com.np/assets/subashPP-66UpkRpj.webp",
        userInitials = createUserInitial(name),
        gender,
      } = action.payload;
      return { id, name, email, avatarUrl, userInitials, gender };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
