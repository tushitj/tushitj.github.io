import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Each note is a folder: src/content/notes/<slug>/index.md, with its photos
// next to it. Reference photos in Markdown as ![Alt text](./photo.jpg).
const notes = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/notes", generateId: ({ entry }) => entry.replace(/\/index\.md$/, "") }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tag: z.enum(["Management", "Lab", "Engineering"]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Drafts render in `npm run dev` only; they are never published.
      draft: z.boolean().default(false),
    }),
});

export const collections = { notes };
