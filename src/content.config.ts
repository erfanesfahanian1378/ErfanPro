import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Text that is either the same in every language, or given per language:
//   summary: Same text everywhere
//   summary: { en: English text, it: Testo italiano, fa: متن فارسی }
// A missing translation falls back to English.
const text = z.union([
  z.string(),
  z.object({ en: z.string(), it: z.string().optional(), fa: z.string().optional() }),
]);

// Blog posts: every Markdown file in src/content/posts is a post.
// Files whose name starts with an underscore (like _template.md) are ignored.
const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** The language the post is written in. It is listed on the blog in every language. */
    lang: z.enum(['en', 'it', 'fa']).default('en'),
    tags: z.array(z.string()).default([]),
    /** Drafts show up in `npm run dev` but are left out of the built site. */
    draft: z.boolean().default(false),
  }),
});

// Projects: one Markdown file per project in src/content/projects.
// Everything is frontmatter; an optional Markdown body is shown under the summary.
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: text,
    summary: text,
    kind: z.enum(['work', 'university', 'personal']),
    /** Human-readable time frame, e.g. "2023 – 2024" or just 2026. */
    period: z.coerce.string(),
    /** Used for sorting (newest first). */
    date: z.coerce.date(),
    role: text.optional(),
    tags: z.array(z.string()).default([]),
    highlights: z.array(text).default([]),
    links: z.array(z.object({ label: text, url: z.url() })).default([]),
    /** Featured projects are shown on the home page. */
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts, projects };
