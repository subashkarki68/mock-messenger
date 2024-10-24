import { subDays } from "date-fns";

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

export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const getRandomTimeStamp = () => {
  // Generate a random number of days within the past 30 days
  const randomDaysAgo = Math.floor(Math.random() * 30);

  // Subtract random days from the current date
  const randomDate = subDays(new Date(), randomDaysAgo);

  // Return the date formatted as ISO string or any other format you prefer
  return randomDate;
};
