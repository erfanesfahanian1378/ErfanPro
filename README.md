# ErfanPro

Personal website of **Erfan Esfahanian**: an introduction, the full CV, projects and a blog.

It's a static site built with [Astro](https://astro.build). There's no server, database or client framework, and the only JavaScript is the small dark-mode toggle. The whole build is about 150 KB, and it can be hosted for free on Cloudflare or any other static host.

**Pages:** Home (`/`), CV (`/cv/`, printable to PDF), Projects (`/projects/`), Blog (`/blog/` + one page per post), RSS feed (`/rss.xml`), sitemap, robots.txt and a custom 404.

## Run it locally

You need Node.js 22.12 or newer (`nvm use` picks the version from `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321, reloads as you edit
npm run build     # builds the static site into dist/
npm run preview   # serves dist/ to check the production build
```

## Where to change things

| What                                      | Where                                                            |
| ----------------------------------------- | ---------------------------------------------------------------- |
| Name, headline, email, social links, menu | `src/data/site.ts`                                               |
| Intro text on the home page               | `src/pages/index.astro`                                          |
| CV: experience, education, skills         | `src/data/cv.ts`                                                 |
| Projects                                  | `src/content/projects/*.md`                                      |
| Blog posts                                | `src/content/posts/*.md`                                         |
| Colours, spacing, fonts                   | `src/styles/global.css` (tokens at the top)                      |
| Public URL of the site                    | `SITE_URL` in `astro.config.mjs`                                 |
| Profile photo                             | put it in `public/` and set `avatar` in `src/data/site.ts`       |
| Link preview image (LinkedIn, X, …)       | replace `public/og.png` (1200×630)                               |

## Write a post

1. Copy `src/content/posts/_template.md` to a new file, for example `src/content/posts/my-first-post.md`. The file name becomes the URL: `/blog/my-first-post/`.
2. Fill in the frontmatter (`title`, `description`, `date`, `tags`) and write the post in Markdown below it. Set `draft: false` when it's ready: drafts show up in `npm run dev` but are left out of the published site.
3. Commit and push. Cloudflare rebuilds and publishes the site in about a minute.

You can also write a post straight from the browser or your phone: on GitHub open `src/content/posts`, choose **Add file → Create new file**, paste the template, and commit.

Images go in `public/images/` and are referenced as `![Alt text](/images/photo.jpg)`.

## Add a project

Copy `src/content/projects/_template.md`. `kind` is `work`, `university` or `personal` (the Projects page groups them), and `featured: true` also shows the project on the home page.

## Deploy for free on Cloudflare

Both options below are on Cloudflare's free plan. The site is only static files: no Worker script runs, so requests don't count against any limit.

### Option A: Cloudflare Workers (what Cloudflare recommends for new sites)

1. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com) (a free account is enough).
2. Go to **Workers & Pages → Create application → Import a repository**, connect GitHub and pick this repository.
3. Use these settings:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy` (the default)
   - **Root directory:** leave empty
4. Click **Deploy**. The site goes live at `https://<project-name>.<your-subdomain>.workers.dev` and redeploys on every push to the production branch (`main` unless you change it).

The deployment settings live in `wrangler.jsonc`: serve `dist/`, and use `404.html` for missing pages. Keep that file. Without it, Cloudflare tries to auto-configure the project and opens a pull request that converts it to server rendering, which you don't need.

### Option B: Cloudflare Pages

1. Go to **Workers & Pages → Create application**, choose **Pages** ("Looking to deploy Pages? Get started") and then **Import an existing Git repository**.
2. Use these settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Click **Save and Deploy**. The site goes live at `https://<project-name>.pages.dev`.

Pages may log a notice that it is skipping `wrangler.jsonc`. That's expected: the file is only used by Option A.

### After the first deploy

- Put the real address in `SITE_URL` in `astro.config.mjs`, then commit and push. It's used for canonical links, the sitemap, the RSS feed and link previews.
- Optional: attach your own domain (**Settings → Domains & Routes** for Workers, **Custom domains** for Pages). Hosting stays free; you only pay for the domain.

### Deploy from your own machine instead

```bash
npm run build
npx wrangler deploy   # asks you to log in to Cloudflare the first time
```

### Other free hosts

`dist/` is plain HTML, CSS and images, so any static host works: Netlify or Vercel (build command `npm run build`, output directory `dist`) or GitHub Pages (with the official `withastro/action`).

## Notes

- **Node version:** `.nvmrc` pins Node 22, and Cloudflare's build image reads it.
- **Headers:** `public/_headers` adds basic security headers and long-term caching for Astro's fingerprinted assets. Cloudflare Workers and Pages both apply it.
- **Privacy:** the site shows your email, GitHub and LinkedIn. Your phone number, home address and work-permit details are deliberately left out.
- **Icons:** [Tabler Icons](https://tabler.io/icons) (MIT), inlined as SVG in `src/lib/icons.ts`.

## Project structure

```text
├── astro.config.mjs        # site URL, sitemap, Markdown settings
├── wrangler.jsonc          # Cloudflare Workers deploy settings (static assets only)
├── public/                 # copied as-is: favicon, og.png, _headers
└── src/
    ├── content.config.ts   # schema for posts and projects
    ├── content/
    │   ├── posts/          # blog posts (Markdown)
    │   └── projects/       # projects (Markdown)
    ├── data/
    │   ├── site.ts         # name, links, menu
    │   └── cv.ts           # experience, education, skills, languages
    ├── components/         # header, footer, cards, icons, <head> tags
    ├── layouts/            # page shell
    ├── lib/                # content helpers, icon paths
    ├── pages/              # one file per route
    └── styles/global.css   # all styles, light and dark themes
```
