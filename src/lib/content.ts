import { getCollection, type CollectionEntry } from 'astro:content';
import { localizePath, type Locale } from '../i18n/config';
import { digits } from '../i18n/format';
import { ui } from '../i18n/ui';

export type Post = CollectionEntry<'posts'>;
export type Project = CollectionEntry<'projects'>;

/** Published posts, newest first. Drafts are only included while running `npm run dev`. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** All projects, newest first. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** A post's page in the given interface language, e.g. /it/blog/hello/. */
export const postUrl = (post: Post, locale: Locale) => localizePath(`/blog/${post.id}/`, locale);

export function readingTime(markdown: string | undefined, locale: Locale): string {
  const words = (markdown ?? '').trim().split(/\s+/).filter(Boolean).length;
  return ui(locale).blog.minRead(digits(String(Math.max(1, Math.round(words / 220))), locale));
}
