import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@src", replacement: resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "@pages",
        replacement: resolve(__dirname, "src/pages"),
      },
      {
        find: "@global",
        replacement: resolve(__dirname, "src/global"),
      },
    ],
  },

  plugins: [react(), tsconfigPaths()],
});
