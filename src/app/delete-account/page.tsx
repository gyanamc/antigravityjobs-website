"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://aijobassistant-production.up.railway.app/api/v1/account/delete-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, reason }),
      });
    } catch (_) {}
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="ag-bg">
      <div className="mx-auto max-w-xl px-5 py-14 sm:py-20">
        <div className="ag-card rounded-3xl p-7 sm:p-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400">Account Management</p>
            <h1 className="text-3xl font-semibold tracking-tight">Delete My Account</h1>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-7 text-white/75">
            <p>
              Submit this form to request deletion of your AntiGravity account and all
              associated data. We will process your request within 30 days and send a
              confirmation to your email address.
            </p>
            <p className="font-semibold text-white">Data that will be deleted:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Profile information (name, email, phone number)</li>
              <li>Resume data and skills profile</li>
              <li>Job interaction history (saved jobs, swipes, applications)</li>
              <li>Cover letters and application drafts</li>
              <li>Anonymised recruiter-facing profile (if you opted in to sharing)</li>
            </ul>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-green-700 bg-green-950 p-4 text-sm text-green-400">
              ✓ Your deletion request has been received. We&apos;ll process it within 30 days and confirm via email.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/60">
                  Email address associated with your account
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-white/25"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/60">
                  Reason for deletion (optional)
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Let us know why you're leaving..."
                  rows={3}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-white/25 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500 disabled:opacity-50 transition-colors"
              >
                {loading ? "Submitting..." : "Request Account Deletion"}
              </button>
              <p className="text-xs text-white/40">
                Alternatively, email{" "}
                <span className="text-white/60">privacy@antigravityjobs.com</span>{" "}
                with subject &quot;Account Deletion Request&quot;.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
