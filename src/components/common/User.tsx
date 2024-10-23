import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface UserProps {
  avatarUrl?: string;
  name?: string;
  userInitials?: string;
  latestMessage?: string;
}
const User: React.FC<UserProps> = ({
  avatarUrl = "https://randomuser.me/api/portraits/men/1.jpg",
  name = "John Doe",
  userInitials = "JD",
  latestMessage = "Hello, how are you?",
}) => {
  return (
    <div className="flex hover:bg-gray-300 px-4 py-2 cursor-pointer rounded-lg w-full">
      <div className="w-12 h-12">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{userInitials}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col ml-4">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground truncate max-w-xs">
          {latestMessage}
        </p>
      </div>
    </div>
  );
};

export default User;
