// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The public address of the site. It is used for canonical links, the sitemap,
// the RSS feed and social-media previews, so update it after your first deploy
// (for example https://erfanpro.<your-subdomain>.workers.dev or your own domain).
const SITE_URL = 'https://erfanpro.pages.dev';

export default defineConfig({
  site: SITE_URL,
  // Fully static output: every page is pre-rendered to plain HTML at build time,
  // so the site can be hosted for free on any static host (Cloudflare, GitHub Pages, ...).
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
    }),
  ],
  // Keep the HTML-aware whitespace handling so inline elements written on
  // separate lines keep the space between them.
  compressHTML: true,
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
