import StatusIcon from "@/components/common/StatusIcon";
import { Icons } from "@/components/icons";
import { OpenerState } from "@/components/layouts/AppLayout";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useUser";
import { UserInfo } from "@/store/slices/userSlice";
import { useSelector } from "react-redux";

interface ChatHeaderProps {
  open: OpenerState;
  setOpen: React.Dispatch<React.SetStateAction<OpenerState>>;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ open, setOpen }) => {
  const currentUser = useCurrentUser();
  const users = useSelector((state: any) => state.users.users);
  const selectedChatId = useSelector(
    (state: any) => state.users.selectedChatId
  );
  const selectedUser = users.find(
    (user: UserInfo) => user.id === selectedChatId
  );
  return (
    <>
      <div className="flex justify-between mb-4">
        <div className="flex gap-4 items-center">
          <div className="relative">
            <Avatar>
              <AvatarImage src={selectedUser?.avatarUrl} />
            </Avatar>
            <StatusIcon
              active={selectedUser?.status === "active"}
              className="absolute bottom-[-1px]"
            />
          </div>
          <h2>{selectedUser?.name}</h2>
        </div>
        <div className="flex">
          <Button variant={"ghost"} title="Call">
            <Icons.phone />
          </Button>
          <Button variant={"ghost"} title="Video Call">
            <Icons.video />
          </Button>
          <Button
            variant={"ghost"}
            title="User Info"
            className={`${open.userDetail ? "bg-secondary" : ""}`}
            onClick={() =>
              setOpen((prev) => ({ ...prev, userDetail: !prev.userDetail }))
            }
          >
            <Icons.more />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
