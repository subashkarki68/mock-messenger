import { useCurrentUser } from "@/hooks/useUser";
import { Message } from "@/interfaces/message";
import { getRandomMessage } from "@/lib/mockMessages";
import { UserInfo } from "@/store/slices/userSlice";
import { compareDesc } from "date-fns";
import { useSelector } from "react-redux";
import Chat from "./Chat";

interface CombinedMessage extends Message {
  isIncomming: boolean;
}

const ChatBody = () => {
  const currentUser = useCurrentUser();
  if (!currentUser) {
    return null;
  }
  const users = useSelector((state: any) => state.users.users);
  const selectedChatId = useSelector(
    (state: any) => state.users.selectedChatId
  );
  // console.log("🚀 ~ ChatBody ~ selectedChatId:", selectedChatId);
  const inCommingUser = users.find(
    (user: UserInfo) => user.id === selectedChatId
  );

  // currentUser.messages = getRandomMessage(inCommingUser?.messages.length());
  const updatedUser = {
    ...currentUser,
    messages: getRandomMessage(inCommingUser?.messages?.length),
  };
  // console.log("🚀 ~ ChatBody ~ inCommingUser:", inCommingUser);
  // console.log("🚀 ~ ChatBody ~ updatedUser:", updatedUser);
  const combinedMessages = [
    ...(inCommingUser?.messages ?? []).map((message: CombinedMessage) => ({
      ...message,
      isIncomming: true,
    })),
    ...(updatedUser?.messages ?? []).map((message: any) => ({
      ...message,
      isIncomming: false,
    })),
  ].sort((a, b) => {
    const dateA = a.timestamp ? new Date(a.timestamp) : new Date(0);
    const dateB = b.timestamp ? new Date(b.timestamp) : new Date(0);
    return compareDesc(dateA, dateB);
  });
  console.log("🚀 ~ ChatBody ~ combinedMessages:", combinedMessages);

  return (
    <div className="w-full">
      {combinedMessages.map((message: CombinedMessage, index) => (
        <Chat
          key={index}
          isIncomming={message.isIncomming}
          message={message}
          user={message.isIncomming ? inCommingUser : updatedUser}
        />
      ))}
    </div>
  );
};

export default ChatBody;
