import Link from "next/link";
import Container from "./Container";

export default function SiteHeader() {
  return (
    <header className="py-6">
      <Container className="flex items-center justify-between gap-6">
        <Link href="/" className="group inline-flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-ink">
            Lumen Studio
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted group-hover:text-ink">
            Lab
          </span>
        </Link>
        <nav
          className="flex items-center gap-5 text-sm font-medium text-ink"
          aria-label="Primary"
        >
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <a
            href="mailto:hello@lumen.studio"
            className="rounded-full border border-ink/15 px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-ink"
          >
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
}
