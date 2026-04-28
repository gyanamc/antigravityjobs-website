"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";

function Metric({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="ag-card rounded-3xl p-6"
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 360, damping: 26 }}
    >
      <div className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {value}
      </div>
      <div className="mt-2 text-sm text-white/65">{label}</div>
      {note ? <div className="mt-2 text-xs text-white/45">{note}</div> : null}
    </motion.div>
  );
}

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal>
          <Metric
            value="—"
            label="Job seekers using AntiGravity"
            note="Placeholder — replace with real number when ready."
          />
        </Reveal>
        <Reveal delay={0.06}>
          <Metric
            value="— hrs"
            label="Time saved per week"
            note="Placeholder — replace with your real benchmark."
          />
        </Reveal>
        <Reveal delay={0.12}>
          <Metric
            value="— / 5"
            label="App rating"
            note="Placeholder — link App Store / Play rating later."
          />
        </Reveal>
      </div>
    </section>
  );
}

export function PainPoints() {
  const items = [
    "Copy-pasting the same cover letter over and over.",
    "Losing track of what you applied to (and when).",
    "Hours applying with zero signal back.",
    "Re-entering the same information across job sites.",
    "Not knowing if you’re actually a fit for the role.",
    "Recruiters spending time unmasking noise.",
    "Job search burnout from endless scrolling.",
    "Privacy concerns when sharing your profile everywhere.",
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-white/55">
              Stuff that shouldn’t happen in 2026
            </div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              The job hunt is full of friction.
              <br />
              We remove it.
            </h2>
            <p className="mt-4 max-w-md text-pretty text-sm leading-6 text-white/65 sm:text-base">
              AntiGravity is built for momentum: cleaner matching, clearer next
              actions, and privacy-first defaults.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((t, i) => (
              <Reveal key={t} delay={0.03 * (i % 6)}>
                <div className="ag-card rounded-3xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/5 text-xs text-emerald-300/90">
                      ✓
                    </span>
                    <div className="text-sm leading-6 text-white/75">{t}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid() {
  const features = [
    {
      k: "AI match + reasoning",
      v: "Know why a role fits—before you spend time applying.",
    },
    {
      k: "Cover letter drafts",
      v: "Generate role-specific drafts in seconds, then edit if you want.",
    },
    {
      k: "Shortlist system",
      v: "Save only what matters. Keep the rest out of your head.",
    },
    {
      k: "Privacy-first recruiting",
      v: "Masked by default. Reveal contact deliberately.",
    },
    {
      k: "Cross-device clarity",
      v: "Mobile-first flow with a clean, premium web presence.",
    },
    {
      k: "Designed for trust",
      v: "Consent-led profile sharing and clear privacy language.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.22em] text-white/55">
          Built for real results
        </div>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything your job search should’ve been.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.k} delay={0.05 * (i % 6)}>
            <div className="ag-card group rounded-3xl p-6">
              <div className="text-sm font-semibold tracking-tight">{f.k}</div>
              <div className="mt-2 text-sm leading-6 text-white/65">{f.v}</div>
              <div className="mt-5 h-px w-full bg-white/10" />
              <div className="mt-4 text-xs text-white/45">
                Premium by design—fast, calm, and intentional.
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const cards = [
    {
      tag: "OFFER ACCEPTED",
      quote:
        "The flow is so clean I stopped procrastinating. I applied consistently—and results finally moved.",
      who: "Early‑career job seeker",
    },
    {
      tag: "MULTIPLE INTERVIEWS",
      quote:
        "The match reasoning saved me from chasing bad fits. My shortlist became obvious in days.",
      who: "Mid‑career professional",
    },
    {
      tag: "SHORTLIST IN MINUTES",
      quote:
        "As a recruiter, I want signal first. Masked results + deliberate reveal feels right.",
      who: "Hiring manager",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.22em] text-white/55">
          Real feedback. Real people.
        </div>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Premium UX gets you back in motion.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.tag} delay={0.06 * i}>
            <div className="ag-card rounded-3xl p-6">
              <div className="inline-flex items-center rounded-full border border-white/12 bg-black/30 px-3 py-1.5 text-[11px] tracking-wide text-white/70">
                {c.tag}
              </div>
              <div className="mt-4 text-sm leading-7 text-white/75">
                “{c.quote}”
              </div>
              <div className="mt-4 text-xs text-white/45">{c.who}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-10 rounded-3xl border border-white/10 bg-black/30 p-6 text-sm text-white/65">
          <span className="font-semibold text-white/85">Note:</span> these are
          placeholders. When you share real testimonials/metrics, we’ll replace
          them and keep the same premium layout.
        </div>
      </Reveal>
    </section>
  );
}

export function Comparison() {
  const rows = [
    ["End-to-end flow", "Yes", "No"],
    ["Match reasoning", "Yes", "Sometimes"],
    ["Cover letter draft", "Yes", "Manual prompts"],
    ["Shortlist organization", "Built in", "Spreadsheets"],
    ["Privacy-first defaults", "Yes", "Varies"],
    ["Designed UX", "Premium", "Tooling"],
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.22em] text-white/55">
          AntiGravity vs. the rest
        </div>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          The job search that works for you.
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="grid grid-cols-3 gap-px bg-white/10 text-sm">
            <div className="bg-black/40 p-4 text-white/70">Capability</div>
            <div className="bg-black/40 p-4 font-semibold text-white">
              AntiGravity
            </div>
            <div className="bg-black/40 p-4 text-white/70">
              Generic AI + manual apply
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {rows.map((r) => (
              <div
                key={r[0]}
                className="grid grid-cols-3 gap-px bg-white/10 text-sm"
              >
                <div className="bg-black/30 p-4 text-white/70">{r[0]}</div>
                <div className="bg-black/30 p-4 text-white/85">{r[1]}</div>
                <div className="bg-black/30 p-4 text-white/70">{r[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    {
      q: "What is AntiGravity Jobs?",
      a: "AntiGravity is built to reduce job-hunt friction: clearer matching, faster applications, and a premium, calm experience across your journey.",
    },
    {
      q: "How does the job seeker flow work?",
      a: "Set your preferences, upload your resume, and swipe through roles. The system helps with fit reasoning and cover-letter drafts so you can move faster.",
    },
    {
      q: "Do recruiters see my personal details?",
      a: "Recruiter results are designed to mask contact details by default. Any sharing should be consent-led and privacy-first.",
    },
    {
      q: "Can I review before I apply?",
      a: "Yes—the goal is to speed you up without taking control away. You should be able to review and edit before submission.",
    },
    {
      q: "Is this available on iOS and Android?",
      a: "Yes—app-store CTAs are featured throughout the site. (Links are placeholders until you provide final store URLs.)",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.22em] text-white/55">
          Still have questions?
        </div>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          We’ve got you covered.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={0.04 * (i % 6)}>
            <div className="ag-card rounded-3xl p-6">
              <div className="text-sm font-semibold">{f.q}</div>
              <div className="mt-2 text-sm leading-6 text-white/65">{f.a}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:pb-28">
      <Reveal>
        <div className="ag-card relative overflow-hidden rounded-[36px] p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_20%_0%,rgba(56,189,248,0.20),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_80%_110%,rgba(217,70,239,0.20),transparent_60%)]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.22em] text-white/55">
                Start now
              </div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to find your next job without the grind?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-white/65 sm:text-base">
                Keep the premium clarity. Keep the privacy. Keep the momentum.
              </p>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/jobseeker"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Download the app
                </Link>
                <Link
                  href="/recruiter"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Recruiter portal
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/30 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-black/40"
                >
                  Privacy
                </Link>
              </div>
              <div className="mt-3 text-xs text-white/45">
                App Store / Play links remain placeholders until you share final
                URLs.
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

