import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      // During SSR pre-rendering, swap convex/react for a lightweight stub
      // that returns undefined for queries and no-op functions for mutations.
      // This lets renderToString complete without a live Convex WebSocket.
      ...(isSsrBuild
        ? {
            "convex/react": path.resolve(
              import.meta.dirname,
              "src/convex-ssr-mock.tsx",
            ),
          }
        : {}),
    },
  },
  // SSR-specific options
  ssr: {
    // Keep framer-motion as an external to avoid dual-bundling issues.
    // It handles SSR natively when imported in a Node context.
    noExternal: ["framer-motion"],
  },
}));
