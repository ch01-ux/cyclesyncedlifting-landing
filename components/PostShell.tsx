import Link from "next/link";
import Image from "next/image";

const SITE = "https://cyclesyncedlifting.com";

export type Faq = { q: string; a: string };

export default function PostShell({
  title,
  description,
  slug,
  date, // "2026-07-05"
  dateLabel, // "July 5, 2026"
  readingTime,
  category,
  faqs = [],
  children,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  dateLabel: string;
  readingTime: string;
  category: string;
  faqs?: Faq[];
  children: React.ReactNode;
}) {
  const url = `${SITE}/blog/${slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Organization", name: "Phase — Cycle-Synced Lifting", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "Cycle Synced Lifting",
      logo: { "@type": "ImageObject", url: `${SITE}/icon.png` },
    },
    mainEntityOfPage: url,
    image: `${SITE}/og.png`,
  };
  const faqLd = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-ink/5">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-2xl tracking-tight text-ink">
            Phase<span className="text-gold">.</span>
          </Link>
          <Link
            href="/blog"
            className="font-mono text-xs font-bold uppercase tracking-widest text-ink/60 hover:text-ink"
          >
            ← All posts
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {dateLabel} · {readingTime} · {category}
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink">
          {title}
        </h1>

        <div className="legal mt-8">{children}</div>

        {faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl text-ink">FAQ</h2>
            <div className="mt-4 divide-y divide-ink/10">
              {faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink">
                    {f.q}
                    <span className="font-mono text-gold transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 rounded-3xl bg-ink p-8 text-center">
          <div className="mx-auto max-w-sm">
            <Image
              src="/shots/reveal-hero.png"
              alt="Phase app showing the next power window mapped on a four-week phase plan"
              width={1320}
              height={2868}
              className="mx-auto w-48 rounded-2xl ring-1 ring-paper/20"
            />
          </div>
          <h2 className="mt-6 font-display text-3xl tracking-tight text-paper">
            Train with your cycle.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-paper/70">
            Phase builds this plan for you automatically — a real strength
            tracker with cycle-aware programming, on iPhone &amp; Apple Watch.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-gold px-7 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5"
          >
            Meet Phase →
          </Link>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted">
          Phase provides general training education, not medical advice. Cycle
          responses vary widely between individuals; consult a healthcare
          provider for medical concerns. Cycle estimates are for training
          planning only — never for contraception or family planning.
        </p>
      </main>

      <footer className="border-t border-ink/5">
        <div className="mx-auto max-w-3xl px-5 py-8 text-xs text-muted">
          © {new Date().getFullYear()} Cycle Synced Lifting ·{" "}
          <Link href="/support" className="underline">Support</Link> ·{" "}
          <Link href="/privacy" className="underline">Privacy</Link>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
    </div>
  );
}
