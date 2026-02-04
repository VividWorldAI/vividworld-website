// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://vividworld.ai",
  integrations: [
    mdx(),
    tailwind(),
    sitemap()
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  server: {
    host: '0.0.0.0',
    allowedHosts: ["tcus1-4321.bd.vividworld.ai", "tcus1-4322.bd.vividworld.ai"]
  },
});
