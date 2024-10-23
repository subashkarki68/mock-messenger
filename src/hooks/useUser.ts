import { setUser, StoreUserInfo, UserInfo } from "@/store/slices/userSlice";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

const mockUser: UserInfo = {
  id: 1,
  name: "Subash Karki",
  email: "ruchirajkarki@gmail.com",
  avatarUrl: "https://www.ruchirajkarki.com.np/assets/subashPP-66UpkRpj.webp",
};

const fetchUser = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return mockUser;
};

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

export { useCurrentUser, useUser };
