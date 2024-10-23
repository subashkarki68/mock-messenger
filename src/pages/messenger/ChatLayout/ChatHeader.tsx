import { Icons } from "@/components/icons";
import { OpenerState } from "@/components/layouts/AppLayout";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useUser";

interface ChatHeaderProps {
  open: OpenerState;
  setOpen: React.Dispatch<React.SetStateAction<OpenerState>>;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ open, setOpen }) => {
  const currentUser = useCurrentUser();
  return (
    <>
      <div className="flex justify-between mb-4">
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src={currentUser?.avatarUrl} />
          </Avatar>
          <h2>{currentUser?.name}</h2>
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
            className={`${open.userDetail ? "bg-blue-50" : ""}`}
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
