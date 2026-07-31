import type { Metadata } from "next";
import Link from "next/link";
import { publishedPosts, scheduledPosts } from "./posts";

// Re-render hourly so scheduled posts appear on their publish date without a
// redeploy.
export const revalidate = 3600;

const SITE = "https://cyclesyncedlifting.com";

export const metadata: Metadata = {
  title: "Blog — training with your cycle",
  description:
    "Evidence-checked guides on strength training and the menstrual cycle: what the research supports, what it doesn't, and how to train through every phase.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = publishedPosts();
  const upcoming = scheduledPosts().slice(0, 3);

  const listLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Phase blog",
    url: `${SITE}/blog`,
    description:
      "Evidence-checked guides on strength training and the menstrual cycle.",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      url: `${SITE}/blog/${p.slug}`,
    })),
  };

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
          Evidence-checked guides on strength training and the menstrual cycle —
          including the parts of the research that don&apos;t flatter us. Every
          claim is sourced.
        </p>

        <div className="mt-12 space-y-8">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="rounded-2xl bg-paper-2 p-7 ring-1 ring-ink/5 transition hover:ring-gold/50"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                <time dateTime={p.date}>{p.dateLabel}</time> · {p.readingTime} ·{" "}
                <span className="text-gold-dark">{p.category}</span>
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

        {upcoming.length > 0 && (
          <section className="mt-14 rounded-2xl border border-dashed border-ink/15 p-7">
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-muted">
              Publishing next
            </h2>
            <ul className="mt-4 space-y-3">
              {upcoming.map((p) => (
                <li key={p.slug} className="text-muted">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">
                    {p.dateLabel}
                  </span>
                  <span className="mt-1 block font-display text-lg leading-snug text-ink/70">
                    {p.title}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <footer className="border-t border-ink/5">
        <div className="mx-auto max-w-3xl px-5 py-8 text-xs text-muted">
          © {new Date().getFullYear()} Cycle Synced Lifting ·{" "}
          <Link href="/support" className="underline">Support</Link>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listLd) }}
      />
    </div>
  );
}
