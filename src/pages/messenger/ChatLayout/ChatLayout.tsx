import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ChatHeader from "./ChatHeader";

const ChatLayout = () => {
  return (
    <Card className="px-4">
      <CardHeader>
        <CardTitle className="text-2xl">
          <ChatHeader />
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default ChatLayout;
