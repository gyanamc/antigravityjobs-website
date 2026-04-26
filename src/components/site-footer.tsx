import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="text-sm font-semibold tracking-tight">AntiGravity Jobs</div>
          <p className="max-w-md text-sm leading-6 text-white/65">
            Built for a faster job hunt and a privacy-first shortlist.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link href="/privacy" className="text-white/70 hover:text-white">
            Privacy
          </Link>
          <Link href="/jobseeker" className="text-white/70 hover:text-white">
            Job Seekers
          </Link>
          <Link href="/recruiter" className="text-white/70 hover:text-white">
            Recruiters
          </Link>
          <span className="text-white/40">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

