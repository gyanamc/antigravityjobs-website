"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Lane = "jobseeker" | "recruiter";

function StoreButtons() {
  // TODO: Replace with real store URLs when available.
  const iosHref = "#";
  const androidHref = "#";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={iosHref}
        className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
      >
        Download on iOS
      </a>
      <a
        href={androidHref}
        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Get it on Google Play
      </a>
    </div>
  );
}

function HowItWorksGraphic({ lane }: { lane: Lane }) {
  const steps = useMemo(() => {
    if (lane === "jobseeker") {
      return [
        {
          title: "Set your targets",
          desc: "Roles, locations, and what you want next.",
        },
        {
          title: "Browse jobs",
          desc: "We evaluate fit instantly as you explore.",
        },
        {
          title: "Save + apply faster",
          desc: "Keep only the best matches—cover letter included.",
        },
      ];
    }
    return [
      {
        title: "Paste a JD",
        desc: "Describe the role once—no filters needed.",
      },
      {
        title: "Get ranked matches",
        desc: "Fast shortlist with AI reasoning.",
      },
      {
        title: "Reveal contact",
        desc: "Privacy-first by default, reveal when ready.",
      },
    ];
  }, [lane]);

  return (
    <div className="ag-card rounded-3xl p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-[0.2em] text-white/55">
            How it works
          </div>
          <div className="text-sm font-semibold tracking-tight">
            {lane === "jobseeker" ? "For job seekers" : "For recruiters"}
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/65 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
          <span>Privacy built-in</span>
        </div>
      </div>

      <div className="mt-5 grid gap-4">
        {steps.map((s, idx) => (
          <div key={s.title} className="flex items-start gap-4">
            <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <span className="text-sm font-semibold text-white/85">
                {idx + 1}
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-semibold">{s.title}</div>
              <div className="text-sm leading-6 text-white/65">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
        <svg
          viewBox="0 0 600 120"
          className="h-20 w-full"
          role="img"
          aria-label="Flow diagram"
        >
          <defs>
            <linearGradient id="ag" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="rgba(217,70,239,0.9)" />
              <stop offset="1" stopColor="rgba(56,189,248,0.85)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M30 60 C 130 20, 190 100, 300 60 S 470 20, 570 60"
            fill="none"
            stroke="url(#ag)"
            strokeWidth="3.5"
            filter="url(#glow)"
            opacity="0.95"
          />

          {[90, 300, 510].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy="60" r="10" fill="rgba(255,255,255,0.12)" />
              <circle cx={x} cy="60" r="5.5" fill="rgba(255,255,255,0.65)" />
              <text
                x={x}
                y={100}
                textAnchor="middle"
                fontSize="10"
                fill="rgba(255,255,255,0.6)"
              >
                {lane === "jobseeker"
                  ? ["Targets", "Browse", "Matches"][i]
                  : ["JD", "Rank", "Reveal"][i]}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function HomeTabs() {
  const [lane, setLane] = useState<Lane>("jobseeker");

  return (
    <section className="space-y-5">
      <div className="ag-card rounded-3xl p-2">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setLane("jobseeker")}
            className={[
              "rounded-2xl px-4 py-3 text-sm font-semibold transition",
              lane === "jobseeker"
                ? "bg-white text-black"
                : "bg-transparent text-white/75 hover:bg-white/5 hover:text-white",
            ].join(" ")}
          >
            Login as Job Seeker
          </button>
          <button
            type="button"
            onClick={() => setLane("recruiter")}
            className={[
              "rounded-2xl px-4 py-3 text-sm font-semibold transition",
              lane === "recruiter"
                ? "bg-white text-black"
                : "bg-transparent text-white/75 hover:bg-white/5 hover:text-white",
            ].join(" ")}
          >
            Login as Recruiter
          </button>
        </div>
      </div>

      {lane === "jobseeker" ? (
        <div className="ag-card rounded-3xl p-6">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.2em] text-white/55">
              Job seeker
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Download the app. Hunt smarter.
            </h2>
            <p className="text-sm leading-6 text-white/70">
              Install on mobile to get the best experience—match scoring, saved
              jobs, and faster applications.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <StoreButtons />
            <Link
              href="/jobseeker"
              className="text-sm font-semibold text-white/80 underline decoration-white/20 underline-offset-4 hover:text-white"
            >
              Continue on web
            </Link>
          </div>
        </div>
      ) : (
        <div className="ag-card rounded-3xl p-6">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.2em] text-white/55">
              Recruiter
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Paste a JD. Get ranked candidates.
            </h2>
            <p className="text-sm leading-6 text-white/70">
              Privacy-first by default—profiles are masked until you choose to
              reveal contact.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/recruiter"
              className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Go to recruiter portal
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-semibold text-white/80 underline decoration-white/20 underline-offset-4 hover:text-white"
            >
              Read privacy
            </Link>
          </div>
        </div>
      )}

      <HowItWorksGraphic lane={lane} />
    </section>
  );
}

