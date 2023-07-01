import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import { VitePluginFonts } from "vite-plugin-fonts";
import { createHtmlPlugin } from "vite-plugin-html";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/app/choose-continent",
  plugins: [
    react(),
    createHtmlPlugin(),
    tsconfigPaths(),
    checker({ typescript: true }),
    svgr(),
    VitePluginFonts({
      google: {
        families: ["Poppins:wght@400;500;600"],
      },
    }),
  ],
});
