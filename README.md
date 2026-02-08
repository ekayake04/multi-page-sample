# Lumen Studio Demo

Multi-page Next.js site with a clear, scalable structure. Includes a homepage and a secondary About page, plus shared layout components.

## Project Organization

```
app/
	about/
		page.tsx            # Secondary page
	components/
		Container.tsx       # Shared layout wrapper
		SiteFooter.tsx      # Global footer
		SiteHeader.tsx      # Global header + nav
	globals.css           # Theme tokens + background + animations
	layout.tsx            # Root layout (fonts + header/footer)
	page.tsx              # Home page
public/
	...                   # Static assets
```

## Run Locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy

This project is compatible with any Next.js host (Vercel, Netlify, Render, etc.).

```bash
npm run build
npm run start
```

## Add a New Page

1. Create a new folder under `app/` with `page.tsx` inside it.
2. Reuse shared components from `app/components/` for consistent layout.
3. Keep sections aligned to the same spacing and typography patterns used in existing pages.

Example:

```
app/contact/page.tsx
```

The page will be auto-routed to `/contact` with the same header, footer, and theme.
