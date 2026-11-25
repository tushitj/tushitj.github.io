// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tushitj.github.io",
  trailingSlash: "ignore",
  image: {
    // Every image (including ones in Markdown posts) gets a srcset and
    // scales down to its container without exceeding its intrinsic size.
    layout: "constrained",
    responsiveStyles: true,
  },
});
