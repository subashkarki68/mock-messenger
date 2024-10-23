import Spinner from "@/components/common/Spinner";
import StatusIcon from "@/components/common/StatusIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { UserInfo } from "@/store/slices/userSlice";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";

const UserDetail = () => {
  const selectedChatId = useSelector(
    (state: any) => state.users.selectedChatId
  );
  const selectedUser = useSelector((state: any) =>
    state.users.users.find((user: UserInfo) => user.id === selectedChatId)
  );
  return (
    <Card className="px-4">
      <CardHeader className="flex items-center">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="w-32 h-32">
            <AvatarImage src={selectedUser?.avatarUrl}></AvatarImage>
            <AvatarFallback>
              <Spinner size={32} />
            </AvatarFallback>
          </Avatar>
          <CardTitle className="flex gap-2 items-center">
            {/* <span className="bg-green-600 h-4 w-4 z-50 rounded-full" /> */}
            <StatusIcon active={selectedUser?.status === "active"} />
            {selectedUser?.name}
          </CardTitle>
          <Badge variant="secondary">
            <LockClosedIcon />
            <span className="ml-2">End to end encryption</span>
          </Badge>
        </div>
      </CardHeader>
    </Card>
  );
};

export default UserDetail;
