import ChatLayout from "@/pages/messenger/ChatLayout/ChatLayout";
import ChatMenu from "@/pages/messenger/ChatMenu/ChatMenu";
import UserDetail from "@/pages/messenger/UserDetail/UserDetail";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Applayout() {
  return (
    <>
      <Header />
      <div className="flex-grow flex flex-col mt-16">
        <div className="container px-4 md:px-8 flex-grow flex flex-row justify-between gap-4">
          {/* <Outlet /> */}
          <div className="flex-grow basis-1/5">
            <ChatMenu />
          </div>
          <div className="flex-grow basis-2/5">
            <ChatLayout />
          </div>
          <div className="flex-grow basis-1/5">
            <UserDetail />
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-8">
        <Footer />
      </div>
    </>
  );
}
