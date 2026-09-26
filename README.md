# phucld.com

Source for [www.phucld.com](https://www.phucld.com), built with Next.js (pages router) and deployed on Vercel.

## Development

```sh
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

## Content

| What          | Where                  |
| ------------- | ---------------------- |
| Blog posts    | `posts/blogs/*.md`     |
| TIL notes     | `posts/tils/*.md`      |
| Projects      | `data/projects.ts`, images in `assets/projects/<id>/` |

Posts use front matter with `title`, `date` (`YYYY-MM-DD`) and an optional `description`. Without a description, the first paragraph is used for link previews.

## Link previews

`components/seo.tsx` renders the title, description, canonical URL, Open Graph and Twitter tags for every page. Preview images come from `pages/api/og.tsx`, which draws a 1200×630 card for any title; projects can set their own `ogImage` instead. The site URL lives in `lib/site.ts`.
