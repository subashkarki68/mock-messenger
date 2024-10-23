import Spinner from "@/components/common/Spinner";
import User from "@/components/common/User";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUsers } from "@/hooks/useUser";
import { getRandomAvatarUrl } from "@/lib/userUtils";
import { UserInfo } from "@/store/slices/userSlice";
import {
  setHasNextPage,
  setIsFetchingNextPage,
  setUsers,
} from "@/store/slices/usersSlice";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const ChatMenu = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useUsers();
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users.users);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data.pages.flatMap((page) => page.data)));
      dispatch(setHasNextPage(hasNextPage));
      dispatch(setIsFetchingNextPage(isFetchingNextPage));
    }
  }, [data, dispatch, hasNextPage, isFetchingNextPage]);
  if (error) return <div>Error: {error.message}</div>;
  return (
    <Card className="overflow-x-hidden overflow-y-scroll h-full">
      <CardHeader>
        <CardTitle className="text-xl">Chats</CardTitle>
      </CardHeader>
      <CardContent>
        {users.map((user: UserInfo) => (
          <User
            key={user.id}
            avatarUrl={getRandomAvatarUrl(user.gender ?? "men")}
            // latestMessage={getRandomMessage()}
            {...user}
          />
        ))}

        {hasNextPage && (
          <div ref={ref}>{isFetchingNextPage ? <Spinner /> : ""}</div>
        )}
      </CardContent>
    </Card>
  );
};

export default ChatMenu;
