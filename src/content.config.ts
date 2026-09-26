import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts: every Markdown file in src/content/posts is a post.
// Files whose name starts with an underscore (like _template.md) are ignored.
const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
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
    title: z.string(),
    summary: z.string(),
    kind: z.enum(['work', 'university', 'personal']),
    /** Human-readable time frame, e.g. "2023 – 2024" or just 2026. */
    period: z.coerce.string(),
    /** Used for sorting (newest first). */
    date: z.coerce.date(),
    role: z.string().optional(),
    tags: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    /** Featured projects are shown on the home page. */
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts, projects };
