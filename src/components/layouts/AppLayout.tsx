import ChatLayout from "@/pages/messenger/ChatLayout/ChatLayout";
import ChatMenu from "@/pages/messenger/ChatMenu/ChatMenu";
import UserDetail from "@/pages/messenger/UserDetail/UserDetail";
import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export interface OpenerState {
  userDetail: boolean;
}

export function Applayout() {
  const [open, setOpen] = useState<OpenerState>({
    userDetail: false,
  });
  return (
    <>
      <Header />
      <div className="flex-grow flex flex-col mt-16">
        <div className="container px-4 md:px-8 flex-grow flex flex-row justify-between gap-4">
          {/* <Outlet /> */}
          <div className="flex-grow basis-1/6">
            <ChatMenu />
          </div>
          <div className="flex-grow basis-3/6">
            <ChatLayout setOpen={setOpen} open={open} />
          </div>

          {open.userDetail && (
            <div className={`flex-grow basis-2/6`}>
              <UserDetail />
            </div>
          )}
        </div>
      </div>
      <div className="container px-4 md:px-8">
        <Footer />
      </div>
    </>
  );
}
