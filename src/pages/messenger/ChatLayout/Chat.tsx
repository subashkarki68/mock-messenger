import Spinner from "@/components/common/Spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Message } from "@/interfaces/message";
import { UserInfo } from "@/store/slices/userSlice";
import { format } from "date-fns";

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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="bg-secondary p-2 rounded-lg shadow-md">
                <p className="cursor-text">{message.text}</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {format(new Date(message.timestamp), "MMM d, yyyy hh:mm a")}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Chat;
