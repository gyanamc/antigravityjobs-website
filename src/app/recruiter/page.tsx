import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recruiters",
  description:
    "Paste a job description, get ranked candidates, and reveal contact details when ready.",
};

export default function RecruiterPage() {
  return (
    <div className="ag-bg">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Recruiter
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Paste a JD. Get ranked candidates.
            </h1>
            <p className="max-w-xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
              Move from JD to shortlist fast. Profiles are masked by default so
              you can evaluate before you reveal contact.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://recruiter.antigravityjobs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Login / Get started
              </a>
              <Link
                href="/privacy"
                className="text-sm font-semibold text-white/80 underline decoration-white/20 underline-offset-4 hover:text-white"
              >
                Privacy & masking
              </Link>
            </div>

            <div className="text-sm text-white/60">
              Want a walkthrough?{" "}
              <a
                href="#"
                className="font-semibold text-white/80 underline decoration-white/20 underline-offset-4 hover:text-white"
              >
                Request a demo
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="ag-card rounded-3xl p-6">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-[0.2em] text-white/55">
                  How it works
                </div>
                <div className="text-xl font-semibold tracking-tight">
                  Built for speed, designed for trust
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                {[
                  { t: "Paste the JD", d: "Describe the role once." },
                  {
                    t: "Get ranked matches",
                    d: "Shortlist candidates with AI reasoning.",
                  },
                  {
                    t: "Reveal contact (when ready)",
                    d: "Masked by default. Reveal only as needed.",
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
                <div className="font-semibold text-white">Masked by default</div>
                <p className="mt-1 leading-6">
                  Candidate contact details are hidden in results. Reveal is a
                  deliberate action, designed to reduce unnecessary exposure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

