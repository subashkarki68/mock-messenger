import Spinner from "@/components/common/Spinner";
import User from "@/components/common/User";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUsers } from "@/hooks/useUser";
import { getRandomMessage } from "@/lib/mockMessages";
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
      const newUsers = data.pages.flatMap((page) => page.data);
      const usersMap = new Map(users.map((user: UserInfo) => [user.id, user]));
      newUsers.forEach((user) => {
        if (!usersMap.has(user.id)) {
          usersMap.set(user.id, {
            ...user,
            avatarUrl: getRandomAvatarUrl(user.gender ?? "men"),
            latestMessage: getRandomMessage(),
          });
        }
      });
      const updatedUsers = Array.from(usersMap.values());
      dispatch(setUsers(updatedUsers));
      dispatch(setHasNextPage(hasNextPage));
      dispatch(setIsFetchingNextPage(isFetchingNextPage));
    }
  }, [data, dispatch, hasNextPage, isFetchingNextPage]);
  // useEffect(() => {
  //   if (data) {
  //     // dispatch(setUsers(data.pages.flatMap((page) => page.data)));
  //     dispatch(
  //       setUsers(
  //         data.pages.flatMap((page) =>
  //           page.data.map((user: UserInfo) => ({
  //             ...user,
  //             avatarUrl: getRandomAvatarUrl(user.gender ?? "men"),
  //             latestMessage: getRandomMessage(),
  //           }))
  //         )
  //       )
  //     );
  //     dispatch(setHasNextPage(hasNextPage));
  //     dispatch(setIsFetchingNextPage(isFetchingNextPage));
  //   }
  // }, [data, dispatch, hasNextPage, isFetchingNextPage]);
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
            // avatarUrl={getRandomAvatarUrl(user.gender ?? "men")}
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
