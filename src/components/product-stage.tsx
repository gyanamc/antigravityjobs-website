"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Lane = "jobseeker" | "recruiter";

export function ProductStage({ lane }: { lane: Lane }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.4 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [7, -7]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e: PointerEvent) {
      // `el` is stable for this effect lifetime, but TS can be strict in Next builds.
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      mx.set(px);
      my.set(py);
    }

    function onLeave() {
      mx.set(0);
      my.set(0);
    }

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [mx, my]);

  const tint =
    lane === "jobseeker"
      ? "from-fuchsia-500/25 via-sky-500/15 to-emerald-500/10"
      : "from-emerald-500/18 via-sky-500/14 to-fuchsia-500/10";

  return (
    <div ref={ref} className="relative">
      <div
        className={[
          "pointer-events-none absolute -inset-10 -z-10 blur-3xl",
          `bg-gradient-to-br ${tint}`,
        ].join(" ")}
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="ag-card relative overflow-hidden rounded-[32px] p-6 sm:p-7"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_280px_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />

        <div className="relative z-10 grid gap-5">
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-[0.22em] text-white/55">
              {lane === "jobseeker" ? "Job Seeker App" : "Recruiter Portal"}
            </div>
            <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/65">
              {lane === "jobseeker" ? "Install-first" : "Privacy-first"}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="text-lg font-semibold tracking-tight text-white">
              {lane === "jobseeker"
                ? "Match scoring, saved jobs, cover letters."
                : "JD → ranked matches, masked by default."}
            </div>
            <div className="text-sm leading-6 text-white/65">
              {lane === "jobseeker"
                ? "A clean shortlist that keeps you moving fast—without guesswork."
                : "Evaluate candidates first. Reveal contact only when ready."}
            </div>
          </div>

          {/* “Apple-ish” product mock without images */}
          <div className="relative mt-2 overflow-hidden rounded-3xl border border-white/10 bg-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(600px_220px_at_30%_0%,rgba(56,189,248,0.18),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(700px_260px_at_70%_100%,rgba(217,70,239,0.18),transparent_60%)]" />

            <div className="relative p-5">
              <div className="flex items-center gap-2 text-xs text-white/55">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="ml-2">anti-gravity</span>
              </div>

              <div className="mt-5 grid gap-3">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 * i, duration: 0.55 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="text-sm font-semibold">
                          {lane === "jobseeker"
                            ? ["Senior AI Engineer", "Data Scientist", "Full‑stack Developer"][i]
                            : ["Candidate A", "Candidate B", "Candidate C"][i]}
                        </div>
                        <div className="text-xs text-white/60">
                          {lane === "jobseeker"
                            ? ["RAG • Python • LangChain", "NLP • SQL • ML", "React • Node • APIs"][i]
                            : ["Skills match • Reasoning", "Skills match • Reasoning", "Skills match • Reasoning"][i]}
                        </div>
                      </div>
                      <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                        {lane === "jobseeker" ? ["92%", "88%", "84%"][i] : ["91", "87", "83"][i]}
                      </div>
                    </div>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-fuchsia-400/80 to-sky-300/80"
                        style={{
                          width: lane === "jobseeker" ? ["92%", "88%", "84%"][i] : ["91%", "87%", "83%"][i],
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

