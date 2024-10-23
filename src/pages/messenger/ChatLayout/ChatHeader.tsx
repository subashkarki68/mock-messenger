import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/useUser";

const ChatHeader = () => {
  const currentUser = useCurrentUser();
  return (
    <div>
      <Avatar>
        <AvatarImage src={currentUser?.avatarUrl} />
      </Avatar>
    </div>
  );
};

export default ChatHeader;
