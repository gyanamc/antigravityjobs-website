import { AppScreenshots } from "@/components/app-screenshots";
import { HomeTabs } from "@/components/home-tabs";
import {
  Comparison,
  FAQ,
  FeatureGrid,
  FinalCTA,
  PainPoints,
  StatsStrip,
  Testimonials,
} from "@/components/home-enhancements";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <div className="ag-bg ag-noise relative">
      <div className="pointer-events-none absolute inset-0 ag-vignette" />

      <section className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:pb-20 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="space-y-7 lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                AntiGravityJobs.com
                <span className="hidden text-white/55 sm:inline">
                  — premium job hunt
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
                Focus.
                <br />
                Match.
                <br />
                Move.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
                An app-first job seeker experience and a privacy-first recruiter
                portal—designed with the same premium clarity you expect from the
                best product sites.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  Privacy by default
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  AI reasoning
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  Masked contact reveal
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.05} className="lg:col-span-6">
            <HomeTabs />
          </Reveal>
        </div>
      </section>

      <StatsStrip />
      <AppScreenshots />

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              k: "Premium clarity",
              v: "A shortlist that looks and feels intentional—no noise.",
            },
            {
              k: "Privacy-first",
              v: "Masking by default. Opt-in sharing. Deliberate reveal.",
            },
            {
              k: "Built for speed",
              v: "From browsing to decision with fewer clicks and less doubt.",
            },
          ].map((x, i) => (
            <Reveal key={x.k} delay={0.05 * i}>
              <div className="ag-card rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-white/55">
                  {x.k}
                </div>
                <div className="mt-2 text-base font-semibold tracking-tight">
                  {x.v}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PainPoints />
      <FeatureGrid />
      <Testimonials />
      <Comparison />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
