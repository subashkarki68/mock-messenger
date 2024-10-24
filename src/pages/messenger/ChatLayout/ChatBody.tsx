import { useCurrentUser } from "@/hooks/useUser";
import { getRandomMessage } from "@/lib/mockMessages";
import { UserInfo } from "@/store/slices/userSlice";
import { useSelector } from "react-redux";
import Chat from "./Chat";

const ChatBody = () => {
  const currentUser = useCurrentUser();
  const users = useSelector((state: any) => state.users.users);
  const selectedChatId = useSelector(
    (state: any) => state.users.selectedChatId
  );
  const inCommingUser = users.find(
    (user: UserInfo) => user.id === selectedChatId
  );
  console.log("🚀 ~ ChatBody ~ inCommingUser:", inCommingUser);
  // currentUser.messages = getRandomMessage(inCommingUser?.messages.length());
  const updatedUser = {
    ...currentUser,
    messages: getRandomMessage(inCommingUser?.messages?.length),
  };
  console.log("🚀 ~ ChatBody ~ updatedUser:", updatedUser);

  if (!currentUser) {
    return null;
  }
  return (
    <div>
      <Chat isIncomming message="Hello" user={updatedUser} />
      <Chat isIncomming={false} message="Hello" user={inCommingUser} />
    </div>
  );
};

export default ChatBody;
