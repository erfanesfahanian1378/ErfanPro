# ErfanPro

Personal website of **Erfan Esfahanian**: an introduction, the full CV, projects and a blog, in English, Italian and Persian.

It's a static site built with [Astro](https://astro.build). There's no server, database or client framework. The only JavaScript is Astro's page router (links switch pages without a full reload), the dark-mode toggle and the language menu. A page is about 45 KB over the network, photo included, and the site can be hosted for free on Cloudflare or any other static host.

**Pages:** Home (`/`), CV (`/cv/`, printable to PDF), Projects (`/projects/`), Blog (`/blog/` + one page per post), RSS feed (`/rss.xml`), sitemap, robots.txt and a custom 404.

**Languages:** English at `/`, Italian at `/it/` (for example `/it/cv/`) and Persian at `/fa/`, written right to left. The globe menu in the header switches the current page to another language.

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
| Email, social links, menu                 | `src/data/site.ts`                                               |
| Name, headline, intro, all other labels   | `src/i18n/ui.ts` (one block per language)                        |
| CV: experience, education, skills         | `src/data/cv.ts`                                                 |
| Projects                                  | `src/content/projects/*.md`                                      |
| Blog posts                                | `src/content/posts/*.md`                                         |
| Colours, spacing, fonts                   | `src/styles/global.css` (tokens at the top)                      |
| Public URL of the site                    | `SITE_URL` in `astro.config.mjs`                                 |
| Profile photo                             | put it in `public/` and set `avatar` in `src/data/site.ts`       |
| Search engine ownership codes             | `VERIFICATION` in `src/data/site.ts`                             |
| Link preview image (LinkedIn, X, …)       | replace `public/og.png` (1200×630)                               |

## Languages

Every text on the site has an English, Italian and Persian version:

- **Interface, headline and intro:** `src/i18n/ui.ts`, with one block per language.
- **CV:** `src/data/cv.ts`. Each text is written as `{ en: '…', it: '…', fa: '…' }`.
- **Projects:** in the frontmatter, a text is either a single string, shown in every language, or `{ en: …, it: …, fa: … }`. A missing translation falls back to English.
- **Posts:** write each post in one language and set `lang` to `en`, `it` or `fa`. The post appears in all three versions of the blog: the menus are translated and the post keeps its own language. Search engines are pointed to the version in the post's language.

Dates follow each language, and Persian pages use Persian digits. Persian pages are right to left and use the [Vazirmatn](https://github.com/rastikerdar/vazirmatn) font from `public/fonts/` (SIL Open Font License). Only Persian pages download it.

## Write a post

1. Copy `src/content/posts/_template.md` to a new file, for example `src/content/posts/my-first-post.md`. The file name becomes the URL: `/blog/my-first-post/` (and `/it/blog/my-first-post/`, `/fa/blog/my-first-post/`).
2. Fill in the frontmatter (`title`, `description`, `date`, `lang`, `tags`) and write the post in Markdown below it. Set `draft: false` when it's ready: drafts show up in `npm run dev` but are left out of the published site.
3. Commit and push. Cloudflare rebuilds and publishes the site in about a minute.

You can also write a post straight from the browser or your phone: on GitHub open `src/content/posts`, choose **Add file → Create new file**, paste the template, and commit.

Images go in `public/images/` and are referenced as `![Alt text](/images/photo.jpg)`.

## Add a project

Copy `src/content/projects/_template.md`. `kind` is `work`, `university` or `personal` (the Projects page groups them), and `featured: true` also shows the project on the home page. The template shows how to translate each text.

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

## Get found when people search your name

The on-page part is done: your name is in every page title, the home page heading and description, and the photo's file name and alt text. The home page also tells search engines, in structured data, that it is your profile and that your GitHub and LinkedIn belong to the same person. Each language has its own address, linked with `hreflang`. The rest happens outside the code:

1. **Tell Google the site exists.** This matters most: without it, Google can take weeks to find a new site.
   1. Open [Google Search Console](https://search.google.com/search-console), click **Add property**, choose **URL prefix** and enter `https://erfanpro.es-erfan95.workers.dev/`.
   2. Choose the **HTML tag** method and copy the value of `content="…"`. Paste it as `google` in `VERIFICATION` in `src/data/site.ts`, then commit and push. Once Cloudflare has redeployed (about a minute), click **Verify**.
   3. Under **Sitemaps**, submit `sitemap-index.xml`.
   4. Under **URL inspection**, enter the home page address and click **Request indexing**. Do the same for `/cv/`, `/it/` and `/fa/`.
2. **Add the site to Bing.** In [Bing Webmaster Tools](https://www.bing.com/webmasters), choose **Import from Google Search Console**; no code needed. Bing's index also powers Yahoo and DuckDuckGo.
3. **Link to the site from your profiles.** They already rank for your name, and links from them tell Google the site is yours. Use the same name, "Erfan Esfahanian", everywhere.
   - LinkedIn: **Contact info → Website**, and a link in **Featured**.
   - GitHub: the **Website** field on your profile and on your repositories (quaderno, kelid, macsmartcleaner).
   - Anywhere else you have a profile: Upwork, Stack Overflow, your university, conference or meetup pages.
4. **Consider your own domain**, such as `erfanesfahanian.com`. It costs about $10 a year at Cloudflare Registrar, and hosting stays free. A domain with your name is the biggest single boost for name searches and looks more professional than `workers.dev`. To switch:
   1. Add the domain under **Workers & Pages → erfanpro → Settings → Domains & Routes → Add → Custom domain**.
   2. Put the new address in `SITE_URL` in `astro.config.mjs` and push.
   3. Add the domain in Search Console. For a domain on Cloudflare, Search Console can create the DNS record for you.
5. **Write now and then.** Each post is another page with your name on it and something people can link to.

Google usually indexes a new site within a few days to a few weeks of step 1. LinkedIn is a very strong site, so your LinkedIn profile may stay near the top as well, and that's fine: it links to this site.

## Notes

- **Node version:** `.nvmrc` pins Node 22, and Cloudflare's build image reads it.
- **Headers:** `public/_headers` adds basic security headers and long-term caching for Astro's fingerprinted assets. Cloudflare Workers and Pages both apply it.
- **Privacy:** the site shows your email, GitHub and LinkedIn. Your phone number, home address and work-permit details are deliberately left out.
- **Fonts:** the system font for English and Italian, and Vazirmatn for Persian (see [Languages](#languages)).
- **Icons:** [Tabler Icons](https://tabler.io/icons) (MIT), inlined as SVG in `src/lib/icons.ts`.

## Project structure

```text
├── astro.config.mjs        # site URL, sitemap, Markdown settings
├── wrangler.jsonc          # Cloudflare Workers deploy settings (static assets only)
├── public/                 # copied as-is: favicon, photo, og.png, fonts, _headers
└── src/
    ├── i18n/               # languages: interface text (ui.ts), dates, URL helpers
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
    ├── pages/              # one file per route; [...locale]/ builds /, /it/ and /fa/
    └── styles/global.css   # all styles, light and dark themes
```
