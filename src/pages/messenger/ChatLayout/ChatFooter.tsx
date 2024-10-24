import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";

const ChatFooter = () => {
  return (
    <div className="w-full mt-2 flex items-center gap-2">
      <div className="flx-grow flex-1">
        <Input
          type="text"
          placeholder="Aa"
          className="bg-secondary rounded-2xl flex-grow"
        />
      </div>
      <div className="flex-grow-0">
        <div
          className="cursor-pointer"
          onClick={() => alert("Comming soon...")}
        >
          <Icons.send />
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;
