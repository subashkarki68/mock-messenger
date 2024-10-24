import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useUser } from "./hooks/useUser";
import { router } from "./Router";

export default function App() {
  useUser();
  console.log("App component rendered");
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
