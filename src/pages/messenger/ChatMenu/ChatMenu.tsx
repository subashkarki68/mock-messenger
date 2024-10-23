import User from "@/components/common/User";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChatMenu = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Chats</CardTitle>
      </CardHeader>
      <CardContent>
        <User />
        <User />
      </CardContent>
    </Card>
  );
};

export default ChatMenu;
