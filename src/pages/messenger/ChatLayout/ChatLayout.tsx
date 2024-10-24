import { OpenerState } from "@/components/layouts/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";

interface ChatLayoutProps {
  open: OpenerState;
  setOpen: React.Dispatch<React.SetStateAction<OpenerState>>;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ open, setOpen }) => {
  return (
    <Card className="px-2 h-full w-full flex flex-col">
      <CardHeader className="mb-2 border-secondary border-b-2">
        <CardTitle>
          <ChatHeader setOpen={setOpen} open={open} />
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-y-scroll">
        <ChatBody />
      </CardContent>
    </Card>
  );
};

export default ChatLayout;
