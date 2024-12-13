// @ts-check
import { defineConfig } from "astro/config";
import svgr from "vite-plugin-svgr";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://dreyescabrera.dev",
  server: {
    host: "0.0.0.0",
  },
  integrations: [
    react(),
    mdx(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  vite: {
    plugins: [svgr()],
  },
});
