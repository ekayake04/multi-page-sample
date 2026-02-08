# Ramen Studio Demo

Multi-page Next.js site with a clear, scalable structure. Includes a homepage and a secondary About page, plus shared layout components and a consistent visual system.

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

### Key Design Decisions

- App Router structure keeps each page self-contained in `app/{route}/page.tsx`.
- Shared layout elements live in `app/components/` for reuse across pages.
- Global styling and theme tokens live in `app/globals.css` for consistent look and feel.
- The root layout applies fonts and persistent chrome (header, footer, background).

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Helpful Scripts

```bash
npm run dev      # Start local dev server
npm run build    # Create production build
npm run start    # Run production build locally
```

## Deploy

This project works on any Next.js-compatible host (Vercel, Netlify, Render, etc.).

```bash
npm run build
npm run start
```

For Vercel, import the repo and use the default Next.js settings.

## Add a New Page (Consistently)

1. Create a route folder under `app/` with `page.tsx` inside it.
2. Follow the same structure as existing pages: hero, supporting sections, CTA.
3. Reuse `Container`, header/footer, and spacing utilities to keep rhythm aligned.
4. Prefer the same typography scale and color tokens from `globals.css`.

Example:

```
app/contact/page.tsx
```

This will auto-route to `/contact` and inherit the global header/footer, fonts, and theme.

## Consistency Checklist

- Use `Container` for page width and padding.
- Keep section spacing in the `pt-16`, `pt-20`, `pt-28` pattern used on existing pages.
- Use `text-muted`, `text-ink`, and `bg-card` to keep the same contrast hierarchy.
- Add CTAs with the existing button styles to preserve focus-visible behavior.
