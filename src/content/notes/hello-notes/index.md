---
title: How to write a note
description: A sample post showing Markdown and photos. It is a draft, so it only appears in local dev.
date: 2026-11-24
tag: Engineering
draft: true
---

This is a sample note. It exists to show the format and is never published,
because `draft: true` hides it from the production build.

## Writing a new note

1. Make a folder: `src/content/notes/my-note-slug/`.
2. Add `index.md` with the front matter at the top of this file.
3. Drop photos into the same folder and reference them with a relative path.
4. Run `npm run dev` and open <http://localhost:4321/notes/>.

## Photos

Put the original photo next to the note. The build resizes it, converts it to
modern formats, and adds a `srcset` so phones download a small version:

![A sample photo placed next to this note](./photo.jpg)

Shrink originals to about 2500px on the long edge before committing, so the
repository stays small.
