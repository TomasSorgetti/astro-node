import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  output: "server",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: "manual",
  },
  middleware: ["./src/middleware.ts"],
  adapter: node({
    mode: "standalone",
  }),
});
