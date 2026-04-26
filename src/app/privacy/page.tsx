import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for AntiGravity Jobs.",
};

export default function PrivacyPage() {
  // Keep copy “real” but non-legalistic; you can swap in lawyer-reviewed text later.
  const effectiveDate = "Apr 26, 2026";

  return (
    <div className="ag-bg">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
        <div className="ag-card rounded-3xl p-7 sm:p-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-white/65">Effective date: {effectiveDate}</p>
          </div>

          <div className="mt-8 space-y-7 text-sm leading-7 text-white/75">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">Overview</h2>
              <p>
                AntiGravity Jobs is designed to help job seekers hunt smarter and
                help recruiters shortlist faster. We aim to collect the minimum
                data needed to provide the service, and we emphasize privacy-first
                defaults.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">Data we may collect</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <span className="font-semibold text-white">Profile inputs</span>{" "}
                  (e.g., role targets, locations, skills, summary) you provide.
                </li>
                <li>
                  <span className="font-semibold text-white">Usage data</span>{" "}
                  (basic diagnostics and feature usage) to improve reliability.
                </li>
                <li>
                  <span className="font-semibold text-white">Recruiter actions</span>{" "}
                  (e.g., searches and “reveal contact” events) to enforce quotas and
                  prevent abuse.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">
                Anonymized profile sharing (opt-in)
              </h2>
              <p>
                If you opt in to share an anonymized profile for matching, we use
                it to support recruiter-side ranking. This is optional and you can
                choose not to share.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">Masked by default</h2>
              <p>
                Recruiter search results are designed to mask personal contact
                details by default. Revealing contact information is a deliberate
                action and may be quota-limited.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">Data sharing</h2>
              <p>
                We do not sell personal data. We may use service providers to run
                the platform (for example, authentication or hosting). Where
                applicable, data is shared only to provide and secure the service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">
                Retention & deletion
              </h2>
              <p>
                We retain data only as long as needed for the product to function
                and for safety/abuse prevention. You can request deletion by
                contacting us.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">Contact</h2>
              <p>
                For privacy questions or deletion requests, contact{" "}
                <span className="font-semibold text-white">privacy@antigravityjobs.com</span>.
              </p>
            </section>

            <p className="text-xs text-white/55">
              This page is a product-facing summary. Replace with lawyer-reviewed
              policy text before a public launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

