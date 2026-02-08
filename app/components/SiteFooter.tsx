import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="pb-10 pt-16">
      <Container className="flex flex-col items-start justify-between gap-6 border-t border-ink/10 pt-8 text-sm text-muted md:flex-row md:items-center">
        <p>Designed to scale. Built with Next.js App Router.</p>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-ink/70">
          <span>Remote</span>
          <span>2016-2026</span>
          <span>Available</span>
        </div>
      </Container>
    </footer>
  );
}
