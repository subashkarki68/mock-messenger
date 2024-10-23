import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Spinner from "./Spinner";

interface UserProps {
  avatarUrl?: string;
  name?: string;
  userInitials?: string;
  latestMessage?: string;
  gender?: string;
}
const User: React.FC<UserProps> = ({
  avatarUrl,
  name = "John Doe",
  userInitials = "JD",
  gender,
  latestMessage,
}) => {
  // const [message, setMessage] = React.useState(latestMessage);
  // const [avatar, setAvatarUrl] = React.useState(avatarUrl);

  // React.useEffect(() => {
  //   if (!message || !avatar) {
  //     setMessage(getRandomMessage());
  //     setAvatarUrl(getRandomAvatarUrl(gender ?? "male"));
  //   }
  // }, [message, avatar]);
  return (
    <div className="flex hover:bg-gray-300 px-4 py-2 cursor-pointer rounded-lg w-full">
      <div className="w-12 h-12">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>
            <Spinner size={12} />
          </AvatarFallback>
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
