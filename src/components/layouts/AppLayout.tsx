import ChatLayout from "@/pages/messenger/ChatLayout/ChatLayout";
import ChatMenu from "@/pages/messenger/ChatMenu/ChatMenu";
import UserDetail from "@/pages/messenger/UserDetail/UserDetail";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export interface OpenerState {
  userDetail: boolean;
}

export function Applayout() {
  const [open, setOpen] = useState<OpenerState>({
    userDetail: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen({
        userDetail: false,
      });
    }, 4800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useLayoutEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight || 0);
    setFooterHeight(footerRef.current?.offsetHeight || 0);
  }, [headerRef, footerRef]);

  return (
    <div className="flex h-screen flex-col">
      <div ref={headerRef}>
        <Header />
      </div>
      <div
        className="flex-grow flex flex-col mt-16"
        style={{
          height: `calc(90vh - ${headerHeight}px - ${footerHeight}px)`,
        }}
      >
        <div className="container px-4 md:px-8 flex-grow flex flex-row justify-between gap-4 h-full">
          {/* <Outlet /> */}
          <div className="flex-grow basis-1/6 h-full">
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
      <div className="container px-4 md:px-8" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
