export const createUserInitial = (name: string) => {
  const [firstName, lastName] = name.split(" ");
  return firstName[0] + lastName[0];
};

export const getRandomAvatarUrl = (gender: string) => {
  if (gender === "female")
    return `https://randomuser.me/api/portraits/women/${Math.floor(
      Math.random() * 100
    )}.jpg`;
  else
    return `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100
    )}.jpg`;
};
