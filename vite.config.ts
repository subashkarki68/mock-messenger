import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const basenameProd = "/mock-messenger";

export default defineConfig(({ command }) => {
  const isProd = command === "build";

  return {
    base: isProd ? basenameProd : "",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      global: {
        basename: isProd ? basenameProd : "",
      },
    },
  };
});
