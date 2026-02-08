export default function AboutPage() {
  return (
    <div className="pb-16">
      <section className="pt-16 lg:pt-24">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                About
              </p>
              <h1 className="text-4xl font-[var(--font-display)] leading-tight text-ink sm:text-5xl">
                A compact studio that works like your in-house team.
              </h1>
              <p className="text-lg leading-relaxed text-muted">
                We are a tight senior crew who loves deep collaboration. That
                means fewer handoffs, faster decisions, and a consistent visual
                voice across every page.
              </p>
            </div>
            <div className="animate-float-in rounded-3xl border border-stroke/70 bg-card/90 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {["Strategy", "Design", "Content", "Prototype"].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-2xl border border-stroke/70 bg-paper/70 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      Focus
                    </p>
                    <p className="mt-2 text-lg font-semibold text-ink">{skill}</p>
                    <p className="text-xs text-muted">Tight feedback loop</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-stroke/70 bg-paper/70 p-4 text-sm text-muted">
                "We build narratives that make complex products feel simple and
                credible."
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-ink/70">
                  - Creative director
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 lg:pt-28">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Workflow
              </p>
              <h2 className="text-3xl font-[var(--font-display)] text-ink">
                Consistency comes from rituals.
              </h2>
              <p className="text-muted">
                New pages follow the same layout grammar: hero, content modules,
                and a clear CTA. The structure below stays identical even as the
                content shifts.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                {
                  title: "Kickoff",
                  detail: "Define audience, scope, and success measures.",
                },
                {
                  title: "Concept",
                  detail: "Create layout directions and visual principles.",
                },
                {
                  title: "Build",
                  detail: "Develop components and responsive layouts.",
                },
                {
                  title: "Launch",
                  detail: "QA, analytics setup, and release support.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-2 rounded-2xl border border-stroke/70 bg-card/90 p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-sm text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 lg:pt-28">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="grid gap-8 rounded-3xl border border-stroke/80 bg-card/85 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Team note
              </p>
              <h2 className="text-3xl font-[var(--font-display)] text-ink">
                We care about the final handoff.
              </h2>
              <p className="text-muted">
                Every layout component is modular and reusable, so adding a new
                page is consistent and low-risk. The README explains the process
                in detail.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-stroke/70 bg-paper/70 p-5 text-sm text-muted">
                Average client engagement: 9 months
              </div>
              <div className="rounded-2xl border border-stroke/70 bg-paper/70 p-5 text-sm text-muted">
                4-page design systems delivered in 6 weeks
              </div>
              <div className="rounded-2xl border border-stroke/70 bg-paper/70 p-5 text-sm text-muted">
                100% async-friendly workflow
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
