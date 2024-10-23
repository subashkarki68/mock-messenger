import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import useUser from "@/hooks/useUser";
import ChatHeader from "./ChatHeader";

const ChatLayout = () => {
  const { data, error, isLoading } = useUser();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Card className="px-4">
      <CardHeader>
        <CardTitle className="text-2xl">{data?.name}</CardTitle>
        <ChatHeader />
      </CardHeader>
    </Card>
  );
};

export default ChatLayout;
