import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "Handle Firebase Content",
        short_name: "Handle Firebase Content",
        description: "Manage your Firebase content ✨",
        theme_color: "#ffffff",
        icons: [
          {
            src: "mstile-150x150.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-144x144.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
