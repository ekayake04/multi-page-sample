import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-16">
      <section className="pt-16 lg:pt-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10">
          <div className="space-y-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-card/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted">
              Product design partner
            </p>
            <h1 className="text-4xl font-[var(--font-display)] leading-tight tracking-tight text-ink sm:text-5xl">
              A multi-page demo built to scale, not just to launch.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              Ramen Studio pairs strategy with craft to help teams ship polished
              experiences. This sample showcases a clear structure, responsive
              grid, and consistent page patterns.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/about"
                className="cta inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold uppercase tracking-[0.2em] text-paper transition hover:bg-accent"
              >
                Meet the team
              </Link>
              <a
                href="#services"
                className="cta-outline inline-flex h-12 items-center justify-center rounded-full border border-ink/20 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink"
              >
                Explore services
              </a>
            </div>
          </div>
          <div className="animate-float-in card-shadow rounded-3xl border border-stroke/80 bg-card/90 p-6 backdrop-blur">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
                <span>Weekly pulse</span>
                <span>February 2026</span>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full rounded-full bg-stroke">
                  <div className="h-2 w-3/4 rounded-full bg-accent" />
                </div>
                <p className="text-sm text-muted">
                  12 initiatives in motion · 3 launches scheduled
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stroke/60 bg-paper/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    Retention lift
                  </p>
                  <p className="text-2xl font-semibold text-ink">+18%</p>
                  <p className="text-xs text-muted">Pilot cohort</p>
                </div>
                <div className="rounded-2xl border border-stroke/60 bg-paper/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    Design cycles
                  </p>
                  <p className="text-2xl font-semibold text-ink">7 days</p>
                  <p className="text-xs text-muted">Avg delivery</p>
                </div>
              </div>
              <div className="rounded-2xl border border-stroke/60 bg-paper/70 p-4 text-sm text-muted">
                "Clarity in every sprint. Stakeholders finally aligned."
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-ink/70">
                  - Ops lead, Helio
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="pt-20 lg:pt-28">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1fr] lg:items-end">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Services
              </p>
              <h2 className="text-3xl font-[var(--font-display)] text-ink">
                Structured for momentum.
              </h2>
            </div>
            <p className="text-muted">
              A repeatable framework ensures every page speaks the same visual
              language while still feeling distinct. The grid below collapses
              cleanly on mobile and expands for larger screens.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Discovery Sprints",
                detail:
                  "Rapid workshops to align on user goals, constraints, and success metrics.",
              },
              {
                title: "Design Systems",
                detail:
                  "Component libraries that scale across teams and pages without drift.",
              },
              {
                title: "Launch Pods",
                detail:
                  "Cross-functional support to bring new features to market in weeks.",
              },
            ].map((card, index) => (
              <div
                key={card.title}
                className={`animate-float-in delay-${index + 1} rounded-2xl border border-stroke/70 bg-card/90 p-6`}
              >
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 lg:pt-28">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="grid gap-8 rounded-3xl border border-stroke/80 bg-card/80 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Delivery map
              </p>
              <h2 className="text-3xl font-[var(--font-display)] text-ink">
                Every page follows the same cadence.
              </h2>
              <p className="text-muted">
                The same layout decisions appear across pages: header, hero,
                content blocks, and a consistent call to action. That makes it
                easy to add new routes with confidence.
              </p>
              <Link
                href="/about"
                className="cta-outline inline-flex h-11 items-center justify-center rounded-full border border-ink/20 px-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink"
              >
                View the about page
              </Link>
            </div>
            <div className="grid gap-4">
              {[
                "Kickoff and alignment",
                "Wireframe and validate",
                "Visual design and QA",
                "Launch and measure",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center justify-between rounded-2xl border border-stroke/70 bg-paper/70 px-5 py-4 text-sm text-ink"
                >
                  <span>{step}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
