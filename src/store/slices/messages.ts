import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "./userSlice";

export interface Message {
  id: number;
  message: string;
  senderId: number;
  receiverId: number;
  createdAt: string;
  updatedAt: string;
  sender: UserInfo;
  receiver: UserInfo;
}

export interface Messages {
  messages: Message[];
}

const initialState: Messages = {
  messages: [],
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages(state, action) {
      return (state.messages = action.payload);
    },
  },
});

export const { setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
