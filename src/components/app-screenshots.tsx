"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Shot = {
  title: string;
  subtitle: string;
  src: string;
  /** subtle composition tweaks */
  focus: "top" | "center";
};

const SHOTS: Shot[] = [
  {
    title: "Job Swipe",
    subtitle: "A calm entry point—then you move fast.",
    src: "/app/placeholder-jobswipe-splash.png",
    focus: "center",
  },
  {
    title: "Preferences",
    subtitle: "Targets + locations, tuned for matching.",
    src: "/app/placeholder-preferences.png",
    focus: "top",
  },
  {
    title: "Resume upload",
    subtitle: "We’ll match jobs and draft cover letters.",
    src: "/app/placeholder-resume-upload.png",
    focus: "top",
  },
];

function PhoneFrame({
  shot,
  index,
  active,
  onSelect,
}: {
  shot: Shot;
  index: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  const reduce = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.45);
  const sx = useSpring(mx, { stiffness: 140, damping: 22, mass: 0.35 });
  const sy = useSpring(my, { stiffness: 140, damping: 22, mass: 0.35 });

  const sheen = useMotionTemplate`radial-gradient(520px 240px at ${sx} ${sy}, rgba(255,255,255,0.22), transparent 55%)`;

  const isActive = index === active;
  const depth = isActive ? 1 : 0.92 - Math.min(0.06 * Math.abs(index - active), 0.12);

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(index)}
      className="relative w-[min(92vw,320px)] text-left sm:w-[300px]"
      style={{ scale: depth }}
      whileHover={reduce ? undefined : { y: -6 }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 360, damping: 26 }}
      aria-label={`Show ${shot.title}`}
    >
      <div className="relative">
        {/* floating orbit */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] blur-3xl"
          animate={
            reduce
              ? undefined
              : {
                  opacity: isActive ? [0.35, 0.55, 0.35] : [0.22, 0.35, 0.22],
                  rotate: isActive ? [0, 6, 0] : [0, -4, 0],
                }
          }
          transition={{ duration: 7 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(closest-side, rgba(34,197,94,0.35), transparent 70%), radial-gradient(closest-side, rgba(56,189,248,0.22), transparent 70%)",
          }}
        />

        <div className="relative overflow-hidden rounded-[34px] border border-white/12 bg-gradient-to-b from-white/10 to-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
          {/* device chrome */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <div className="text-[11px] font-medium tracking-wide text-white/45">
              Job Swipe
            </div>
            <div className="w-10" />
          </div>

          <div className="relative px-3 pb-3">
            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black">
              <motion.div
                className="pointer-events-none absolute inset-0 z-20 mix-blend-screen"
                style={{ background: sheen }}
              />

              <motion.div
                className="relative"
                onPointerMove={(e) => {
                  const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                  mx.set((e.clientX - r.left) / r.width);
                  my.set((e.clientY - r.top) / r.height);
                }}
                onPointerLeave={() => {
                  mx.set(0.5);
                  my.set(shot.focus === "top" ? 0.32 : 0.5);
                }}
                animate={
                  reduce
                    ? undefined
                    : {
                        y: isActive ? [0, -7, 0] : [0, -4, 0],
                      }
                }
                transition={{
                  duration: isActive ? 5.2 : 6.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.25,
                }}
              >
                <Image
                  src={shot.src}
                  alt={`${shot.title} screenshot placeholder`}
                  width={1080}
                  height={2340}
                  priority={index === 0}
                  className={[
                    "h-auto w-full select-none",
                    shot.focus === "top" ? "object-top" : "object-center",
                  ].join(" ")}
                  sizes="(max-width: 640px) 92vw, 300px"
                />

                {/* swipe hint */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 bottom-6 z-30 rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-[11px] text-white/75 backdrop-blur-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.08, duration: 0.6 }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-white/60">Swipe</span>
                    <span className="font-semibold text-white/85">AI cover letter</span>
                    <motion.span
                      className="text-emerald-300/90"
                      animate={reduce ? undefined : { x: [0, 6, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="mt-4 px-1">
              <div className="text-sm font-semibold tracking-tight">{shot.title}</div>
              <div className="mt-1 text-sm leading-6 text-white/65">{shot.subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

export function AppScreenshots() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  const activeShot = useMemo(() => SHOTS[active]!, [active]);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SHOTS.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.10),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-white/55">
              From the app
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Placeholder screens—animated like a product launch.
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-sm leading-6 text-white/65 sm:text-base">
              These are your real mobile screenshots, staged in a phone frame with subtle
              motion, parallax sheen, and a gentle carousel rhythm. Swap the files in{" "}
              <span className="font-semibold text-white/85">public/app/</span> anytime.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:justify-end">
            {SHOTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  i === active ? "bg-white" : "bg-white/25 hover:bg-white/40",
                ].join(" ")}
                aria-label={`Go to screen ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          {/* Desktop: 3-up staged composition */}
          <div className="hidden items-end justify-center gap-6 lg:flex">
            {SHOTS.map((shot, i) => (
              <motion.div
                key={shot.src}
                initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.75, ease: [0.21, 0.61, 0.35, 1], delay: 0.08 * i }}
                style={{
                  rotate: i === 0 ? -7 : i === 2 ? 7 : 0,
                  translateY: i === 1 ? -10 : 0,
                }}
              >
                <PhoneFrame shot={shot} index={i} active={active} onSelect={setActive} />
              </motion.div>
            ))}
          </div>

          {/* Mobile: focused carousel */}
          <div className="lg:hidden">
            <div className="mx-auto flex max-w-[360px] justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShot.src}
                  initial={{ opacity: 0, y: 18, scale: 0.98, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -14, scale: 0.985, filter: "blur(8px)" }}
                  transition={{ duration: 0.55, ease: [0.21, 0.61, 0.35, 1] }}
                >
                  <PhoneFrame
                    shot={activeShot}
                    index={active}
                    active={active}
                    onSelect={setActive}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
