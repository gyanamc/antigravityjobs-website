import { HomeTabs } from "@/components/home-tabs";

export default function Home() {
  return (
    <div className="ag-bg">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live on{" "}
              <span className="font-semibold text-white">AntiGravityJobs.com</span>
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A premium job hunt for seekers.
              <br />
              A faster shortlist for recruiters.
            </h1>
            <p className="max-w-xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
              Choose your lane below. We’ll route you to the right experience—job
              seeker or recruiter—with clear privacy, and app-first conversion.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                Privacy-first
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                AI match + reasoning
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                Masked profiles for recruiters
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HomeTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
