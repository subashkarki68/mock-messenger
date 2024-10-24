import { useCurrentUser } from "@/hooks/useUser";
import { Message } from "@/interfaces/message";
import { getRandomMessage } from "@/lib/mockMessages";
import { UserInfo } from "@/store/slices/userSlice";
import { compareAsc } from "date-fns";
import { useEffect, useRef, useState } from "react";
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
  const inCommingUser = users.find(
    (user: UserInfo) => user.id === selectedChatId
  );
  const [updatedUser, setUpdatedUser] = useState<any>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inCommingUser) {
      const messages = getRandomMessage(inCommingUser?.messages?.length);
      setUpdatedUser({ ...currentUser, messages });
    }
  }, [inCommingUser, currentUser]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [updatedUser, inCommingUser]);

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
    return compareAsc(dateA, dateB);
  });

  return (
    <div className="w-full" ref={chatBodyRef}>
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
