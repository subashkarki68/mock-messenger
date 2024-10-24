import { API } from "@/config/constants";
import { setUser, StoreUserInfo, UserInfo } from "@/store/slices/userSlice";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

const mockUser: UserInfo = {
  id: 1,
  name: "Subash Karki",
  email: "ruchirajkarki@gmail.com",
  avatarUrl: "https://www.ruchirajkarki.com.np/assets/subashPP-66UpkRpj.webp",
  gender: "male",
};

const fetchUser = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return mockUser;
};

const fetchUsers = async ({ pageParam = 1 }) => {
  const response = await fetch(`${API.USERS}?page=${pageParam}`);
  return response.json();
};

//currentUSer
const useUser = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
  if (data) dispatch(setUser(data));
  return { data, error, isLoading };
};

const useCurrentUser = () => {
  return useSelector((state: any) => state.user as StoreUserInfo);
};

const useUsers = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.meta.pagination.links.next) {
        const nextPage = lastPage.meta.pagination.links.next.split("page=")[1];
        return parseInt(nextPage, 10);
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};

export { useCurrentUser, useUser, useUsers };
