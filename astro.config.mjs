// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import netlify from "@astrojs/netlify";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  output: "server",

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },

  integrations: [
    react(),
    sitemap(),
    sanity({
      projectId: "do2b3amu",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: "/admin",
    }),
  ],

  adapter: netlify(),
});
