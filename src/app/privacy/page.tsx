import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AntiGravity Jobs",
  description: "Privacy policy for AntiGravity Jobs.",
};

export default function PrivacyPage() {
  return (
    <div className="ag-bg">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
        <div className="ag-card rounded-3xl p-7 sm:p-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c8f135]">Legal</p>
            <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-white/65">Last updated: May 5, 2026 · Effective: May 5, 2026</p>
          </div>

          <div className="mt-8 space-y-7 text-sm leading-7 text-white/75">
            <p>
              AntiGravity ("we", "our", or "us") operates the AntiGravity mobile application
              and the antigravityjobs.com website (collectively, the "Service"). This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information
              when you use our Service.
            </p>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li><span className="font-semibold text-white">Account information</span> — name, email address, and profile data when you sign in via Google OAuth</li>
                <li><span className="font-semibold text-white">Resume and profile data</span> — work experience, skills, education, and preferences you upload or enter</li>
                <li><span className="font-semibold text-white">Job interaction data</span> — jobs you save, swipe on, or apply to</li>
                <li><span className="font-semibold text-white">Cover letters and application drafts</span> — content generated or edited within the app</li>
              </ul>
              <p>We also collect certain information automatically: device identifiers, operating system information, app usage data, and network connectivity information.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">2. How We Use Your Information</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>Provide, operate, and improve the Service</li>
                <li>Match your profile against job listings using AI scoring</li>
                <li>Generate personalised cover letter drafts</li>
                <li>Authenticate your identity and maintain your account</li>
                <li>Send you service-related communications</li>
                <li>Analyse usage patterns to improve app performance</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">3. Sharing of Information</h2>
              <p>We do not sell your personal information. We may share your information in the following limited circumstances:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li><span className="font-semibold text-white">With recruiters (opt-in only)</span> — if you explicitly enable profile sharing, an anonymised version of your profile may be visible to recruiters. Your contact details remain masked by default and are only revealed upon your consent.</li>
                <li><span className="font-semibold text-white">Service providers</span> — we use Supabase (authentication and database), Railway (backend hosting), and Groq (AI inference). These providers process data on our behalf under appropriate data protection agreements.</li>
                <li><span className="font-semibold text-white">Legal requirements</span> — we may disclose information if required by law or to protect the rights and safety of our users.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">4. Data Retention</h2>
              <p>
                We retain your personal data for as long as your account is active or as needed
                to provide the Service. You may request deletion of your account and associated
                data at any time by contacting us. We will process deletion requests within 30 days.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">5. Security</h2>
              <p>
                We implement industry-standard security measures including encrypted data
                transmission (HTTPS/TLS), secure authentication via Supabase JWT tokens, and
                access controls on our backend infrastructure. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">6. Children&apos;s Privacy</h2>
              <p>
                The Service is intended for users who are 18 years of age or older. We do not
                knowingly collect personal information from children under 13. If we become aware
                that we have collected personal information from a child under 13, we will take
                steps to delete that information promptly.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Access — request a copy of the data we hold about you</li>
                <li>Correction — request correction of inaccurate data</li>
                <li>Deletion — request deletion of your data</li>
                <li>Portability — request your data in a machine-readable format</li>
                <li>Objection — object to certain types of processing</li>
              </ul>
              <p>To exercise any of these rights, contact us at <span className="font-semibold text-white">privacy@antigravityjobs.com</span>.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">8. Third-Party Services</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>Supabase — authentication and database</li>
                <li>Groq — AI inference</li>
                <li>LinkedIn and Naukri — job listing data accessed via browser extension, subject to their respective terms</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes by updating the &quot;Last updated&quot; date at the top of this page.
                Continued use of the Service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">10. Contact Us</h2>
              <p>
                For privacy questions or deletion requests, contact{" "}
                <span className="font-semibold text-white">privacy@antigravityjobs.com</span>.
              </p>
              <p>
                To request account deletion, visit our{" "}
                <a href="/delete-account" className="text-[#c8f135] hover:underline">account deletion page</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
