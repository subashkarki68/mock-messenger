import { OpenerState } from "@/components/layouts/AppLayout";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";

interface ChatLayoutProps {
  open: OpenerState;
  setOpen: React.Dispatch<React.SetStateAction<OpenerState>>;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ open, setOpen }) => {
  return (
    <Card className="px-2">
      <CardHeader>
        <CardTitle>
          <ChatHeader setOpen={setOpen} open={open} />
          <ChatBody />
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default ChatLayout;
