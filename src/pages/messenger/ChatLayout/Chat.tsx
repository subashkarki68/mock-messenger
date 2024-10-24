import Spinner from "@/components/common/Spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Message } from "@/interfaces/message";
import { UserInfo } from "@/store/slices/userSlice";

interface ChatProps {
  isIncomming: boolean;
  message: Message;
  user: UserInfo;
}

const Chat: React.FC<ChatProps> = ({ isIncomming, message, user }) => {
  const alignment = isIncomming ? "justify-start" : "justify-end";

  return (
    <div className={`flex ${alignment} mb-4`}>
      <div
        className={`flex items-center gap-2 ${
          !isIncomming ? "flex-row-reverse" : ""
        } `}
      >
        <Avatar>
          <AvatarImage src={user?.avatarUrl} />
          <AvatarFallback>
            <Spinner size={12} />
          </AvatarFallback>
        </Avatar>
        <div className="bg-secondary p-2 rounded-lg shadow-md">
          {message.text}
        </div>
      </div>
    </div>
  );
};

export default Chat;
