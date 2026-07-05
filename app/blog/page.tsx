import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — training with your cycle",
  description:
    "Guides on cycle-synced strength training, women's workout trackers, and getting stronger by working with your hormones instead of against them.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "best-workout-tracker-for-women",
    title: "The Best Workout Tracker for Women in 2026: 6 Apps Compared",
    excerpt:
      "Strong, Hevy, Flo, Clue, Wild.AI, FitrWoman — we compared the most popular workout trackers and cycle apps, and found the gap every one of them leaves open.",
    date: "July 5, 2026",
    readingTime: "8 min read",
  },
  {
    slug: "cycle-syncing-workout-plan",
    title: "Cycle Syncing Workout Plan: How to Train in Every Phase (4-Week Template)",
    excerpt:
      "What to do in your menstrual, follicular, ovulatory and luteal phases — plus a 4-week strength template you can start this cycle.",
    date: "July 5, 2026",
    readingTime: "9 min read",
  },
  {
    slug: "lifting-on-your-period",
    title: "Lifting on Your Period: What Actually Helps (And What to Skip)",
    excerpt:
      "Yes, you can lift on your period. Here's how to adjust volume, intensity and expectations during your menstrual phase — without losing progress.",
    date: "July 5, 2026",
    readingTime: "6 min read",
  },
  {
    slug: "what-is-a-power-window",
    title: "What Is a Power Window? Your Cycle's Strongest Days, Explained",
    excerpt:
      "The stretch of your cycle when strength and power output tend to peak — the science, the one caution, and how to find yours.",
    date: "July 5, 2026",
    readingTime: "5 min read",
  },
];

export default function Blog() {
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
          The Phase blog
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-ink">
          Training with your cycle
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Honest guides on strength training, women&apos;s workout trackers, and
          the science of syncing your program to your hormones.
        </p>

        <div className="mt-12 space-y-8">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="rounded-2xl bg-paper-2 p-7 ring-1 ring-ink/5 transition hover:ring-gold/50"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {p.date} · {p.readingTime}
              </p>
              <h2 className="mt-3 font-display text-2xl leading-snug text-ink">
                <Link href={`/blog/${p.slug}`} className="hover:text-gold-dark">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{p.excerpt}</p>
              <Link
                href={`/blog/${p.slug}`}
                className="mt-4 inline-block font-mono text-sm font-bold uppercase tracking-widest text-gold-dark underline decoration-gold decoration-2 underline-offset-4"
              >
                Read the post →
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-ink/5">
        <div className="mx-auto max-w-3xl px-5 py-8 text-xs text-muted">
          © {new Date().getFullYear()} Cycle Synced Lifting ·{" "}
          <Link href="/support" className="underline">Support</Link>
        </div>
      </footer>
    </div>
  );
}
