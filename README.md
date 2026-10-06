# Asheesh Kumar — Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide React + React Router. Fully static: no backend, no database.

All content (name, skills, projects, links, education, achievements) lives in **`src/data/portfolio.js`**. Edit that one file to update the site.

## 1. Installation

Requires Node.js 18+.

```bash
npm install
```

## 2. Local development

```bash
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## 3. Adding your profile photo

Replace `public/profile.jpg` with your photo (keep the filename). A square or portrait image of about 600×600 px works best. Until the file exists, the site shows a clean "AK" avatar placeholder automatically.

## 4. Adding project images

1. Put a screenshot in `public/projects/`, e.g. `public/projects/enterprise-hybrid-rag.png`.
2. In `src/data/portfolio.js`, set that project's `image` field:

```js
image: '/projects/enterprise-hybrid-rag.png',
```

If `image` is empty (or the file fails to load), the abstract gradient preview is shown instead.

## 5. Production build

```bash
npm run build
npm run preview   # optional: preview the build locally
```

Output goes to `dist/`.

## 6. Deploying to Vercel

**Option A — Git (recommended):**
1. Push this folder to a GitHub repository.
2. On https://vercel.com choose **Add New → Project** and import the repo.
3. Vercel auto-detects Vite (build command `npm run build`, output `dist`). Click **Deploy**.

**Option B — CLI:**
```bash
npm i -g vercel
vercel --prod
```

`vercel.json` already rewrites all routes to `index.html`, so direct links like `/projects` work. For Netlify, `public/_redirects` does the same.
