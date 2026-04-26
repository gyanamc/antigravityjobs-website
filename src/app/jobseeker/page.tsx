import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Job Seekers",
  description: "Download the app and hunt smarter with AntiGravity Jobs.",
};

export default function JobSeekerPage() {
  // TODO: Replace with real store URLs when available.
  const iosHref = "#";
  const androidHref = "#";

  return (
    <div className="ag-bg">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Job Seeker
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              The premium way to hunt for your next role.
            </h1>
            <p className="max-w-xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
              Set your targets. Browse jobs. Keep only the best matches—with
              reasoning and a cover letter draft ready to go.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={iosHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Download on iOS
              </a>
              <a
                href={androidHref}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Get it on Google Play
              </a>
            </div>

            <div className="text-sm text-white/60">
              Prefer reading first?{" "}
              <Link
                href="/privacy"
                className="font-semibold text-white/80 underline decoration-white/20 underline-offset-4 hover:text-white"
              >
                Privacy policy
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="ag-card rounded-3xl p-6">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-[0.2em] text-white/55">
                  How it works
                </div>
                <div className="text-xl font-semibold tracking-tight">
                  3 steps to a cleaner shortlist
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                {[
                  {
                    t: "Set your targets",
                    d: "Roles, locations, and what you want next.",
                  },
                  {
                    t: "Browse jobs",
                    d: "Get match scoring + reasoning as you explore.",
                  },
                  {
                    t: "Save the best",
                    d: "Store matches and move faster with a cover letter draft.",
                  },
                ].map((s, i) => (
                  <div key={s.t} className="flex items-start gap-4">
                    <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <span className="text-sm font-semibold text-white/85">
                        {i + 1}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-semibold">{s.t}</div>
                      <div className="text-sm leading-6 text-white/65">{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/70">
                <div className="font-semibold text-white">Privacy-first</div>
                <p className="mt-1 leading-6">
                  If you choose to share an anonymized profile for matching, it’s
                  opt-in—and designed to minimize exposure of personal details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

