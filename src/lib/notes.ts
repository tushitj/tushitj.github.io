import { getCollection } from "astro:content";

/** Notes newest first. Drafts are included only in `astro dev`. */
export async function getNotes() {
  const notes = await getCollection("notes", ({ data }) => import.meta.env.DEV || !data.draft);
  return notes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatMonth(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}
