# GLOBIAWorld — Website Starter

A responsive, frontend-only React website for GLOBIAWorld.

**Brand line:** One World. One Platform. Infinite Connections.

## What's included

- Responsive homepage for desktop, tablet and mobile
- Services and category discovery
- Featured expert profiles (sample/demo content)
- Remote job cards with a working category filter
- Training and business solutions sections
- Search interaction (demo only)
- Newsletter form interaction (demo only)
- Mobile navigation and responsive layout
- Brand favicon and page metadata

## Important: current functionality

This is a complete frontend starter, not a live marketplace backend. The sample experts, service counts and job listings are demonstration content. Search, profile actions, registration, applications, saving profiles and newsletter subscription display demo feedback only.

No account, database, payment provider, email service or external API is connected. No credentials or secret keys are required.

## Run it on your computer

You need Node.js (LTS recommended).

1. Extract the ZIP file.
2. Open a terminal inside the extracted `globiaworld` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the local development server:

   ```bash
   npm run dev
   ```

5. Open the local address printed by Vite (usually `http://localhost:5173`).

## Build the website

```bash
npm run build
```

The production website is generated in the `dist` folder. Preview it locally with:

```bash
npm run preview
```

## Publish to GitHub later

1. Create a new repository on GitHub, for example `globiaworld`.
2. Extract this ZIP on your computer.
3. Upload the contents of the `globiaworld` folder to the repository (including `package.json`, `index.html`, `src`, and `public`).
4. Commit the files.
5. Connect the repository to a static hosting service such as Vercel, Netlify or Cloudflare Pages when you are ready.

For a Vite project, the typical hosting settings are:
- Build command: `npm run build`
- Output directory: `dist`

## Main files

- `src/App.jsx` — homepage structure, sample data and interactions
- `src/styles.css` — full responsive visual design
- `src/main.jsx` — React entry point
- `public/favicon.svg` — GLOBIAWorld icon
- `index.html` — page title and metadata

## Suggested next development stages

1. Confirm the design and replace demo copy/sample profiles with approved content.
2. Add real service and expert listing pages.
3. Add user accounts and role permissions.
4. Add database-backed search, service enquiries and job applications.
5. Add payment, messaging, moderation and verification only when the business model and budget are ready.

Keep any future API keys and secret credentials out of frontend source code.


## Publish automatically with GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Upload the **contents** of this project folder to the root of your GitHub repository.
2. Make sure the default branch is named `main`.
3. In GitHub, open your repository → **Settings** → **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab. The workflow named **Deploy GLOBIAWorld to GitHub Pages** should run after you push to `main`.
6. When it finishes successfully, open **Settings → Pages** to find your published website address.

The workflow automatically sets the correct Vite base path using your repository name. You do not need to edit it if your repository has a different name.

Every new push to `main` will rebuild and publish the site. GitHub Pages hosting is for the static frontend; accounts, database features, payments and live marketplace functions still need a backend.
