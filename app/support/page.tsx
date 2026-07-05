import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Phase — the cycle-synced workout tracker for women who lift. Contact support, ask privacy questions, or browse the FAQ.",
  alternates: { canonical: "/support" },
};

const channels = [
  {
    title: "App support",
    email: "support@cyclesyncedlifting.com",
    body: "Bugs, billing, subscription questions, feature requests, or anything about using Phase on iPhone or Apple Watch. We aim to reply within two business days.",
  },
  {
    title: "Privacy questions",
    email: "privacy@cyclesyncedlifting.com",
    body: "Questions about your data, HealthKit access, iCloud sync, or data deletion. Short version: your cycle data never leaves your device — but we're happy to explain the details.",
  },
  {
    title: "Everything else",
    email: "hello@cyclesyncedlifting.com",
    body: "Press, partnerships, creator collaborations, or just to say hi.",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-ink/5">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-2xl tracking-tight text-ink">
            Phase<span className="text-gold">.</span>
          </Link>
          <Link
            href="/"
            className="font-mono text-xs font-bold uppercase tracking-widest text-ink/60 hover:text-ink"
          >
            ← Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
          We&apos;re here to help
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-ink">Support</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Phase is built by a small team that reads every email. Pick the right
          inbox below and we&apos;ll get back to you quickly.
        </p>

        <div className="mt-10 grid gap-6">
          {channels.map((c) => (
            <div key={c.email} className="rounded-2xl bg-paper-2 p-6 ring-1 ring-ink/5">
              <h2 className="font-display text-xl text-ink">{c.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
              <a
                href={`mailto:${c.email}`}
                className="mt-4 inline-block font-mono text-sm font-bold text-gold-dark underline decoration-gold decoration-2 underline-offset-4"
              >
                {c.email}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-ink p-6 text-paper">
          <h2 className="font-display text-xl">Before you email…</h2>
          <p className="mt-2 leading-relaxed text-paper/70">
            The answer might already be on the site: check the{" "}
            <Link href="/#faq" className="text-gold underline underline-offset-4">
              FAQ
            </Link>{" "}
            for common questions, the{" "}
            <Link href="/privacy" className="text-gold underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            for how your data is handled, or the{" "}
            <Link href="/#features" className="text-gold underline underline-offset-4">
              feature overview
            </Link>{" "}
            for what Phase can do.
          </p>
        </div>
      </main>

      <footer className="border-t border-ink/5">
        <div className="mx-auto max-w-3xl px-5 py-8 text-xs text-muted">
          © {new Date().getFullYear()} Cycle Synced Lifting
        </div>
      </footer>
    </div>
  );
}
