import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPost, getPosts, isPublished } from "@/app/blog/posts";

const SITE = "https://cyclesyncedlifting.com";

export type Faq = { q: string; a: string };
export type Source = { label: string; url: string };

/**
 * Answer-first block. Sits directly under the H1 and gives the 40–60 word
 * direct answer that AI assistants and featured snippets lift verbatim.
 */
export function Answer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-2xl border-l-4 border-gold bg-paper-2 p-6">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-gold-dark">
        Short answer
      </p>
      <div className="answer mt-2 text-lg leading-relaxed text-ink">{children}</div>
    </div>
  );
}

/**
 * Internal link to another post that degrades to plain text while that post is
 * still scheduled. Lets a live post reference the rest of its cluster without
 * ever pointing a reader — or a crawler — at a 404.
 */
export function PostLink({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  if (!isPublished(getPost(slug))) return <>{children}</>;
  return <Link href={`/blog/${slug}`}>{children}</Link>;
}

export default function PostShell({
  title,
  description,
  slug,
  faqs = [],
  sources = [],
  related = [],
  children,
}: {
  title: string;
  description: string;
  slug: string;
  faqs?: Faq[];
  sources?: Source[];
  /** Slugs of 2–4 posts to surface at the end. Unpublished ones are dropped. */
  related?: string[];
  children: React.ReactNode;
}) {
  const post = getPost(slug);

  // Scheduled post: the route exists in the build but stays dark until its
  // publish date. Pages using this shell set `revalidate`, so it flips live on
  // its own.
  if (!isPublished(post)) notFound();

  const url = `${SITE}/blog/${slug}`;
  const relatedPosts = getPosts(related).filter((p) => isPublished(p));

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@type": "Organization", name: "Phase — Cycle-Synced Lifting", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "Cycle Synced Lifting",
      logo: { "@type": "ImageObject", url: `${SITE}/icon.png` },
    },
    mainEntityOfPage: url,
    image: `${SITE}/og.png`,
    articleSection: post.category,
    ...(sources.length
      ? { citation: sources.map((s) => ({ "@type": "CreativeWork", name: s.label, url: s.url })) }
      : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
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
        <nav
          aria-label="Breadcrumb"
          className="font-mono text-xs uppercase tracking-widest text-muted"
        >
          <Link href="/" className="hover:text-ink">Home</Link>
          {" / "}
          <Link href="/blog" className="hover:text-ink">Blog</Link>
          {" / "}
          <span className="text-gold-dark">{post.category}</span>
        </nav>

        <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink">
          {title}
        </h1>

        <p className="mt-4 text-sm text-muted">
          By the <strong className="text-ink">Phase</strong> team ·{" "}
          <time dateTime={post.date}>{post.dateLabel}</time>
          {post.updatedLabel && (
            <>
              {" "}
              · Updated <time dateTime={post.updated}>{post.updatedLabel}</time>
            </>
          )}{" "}
          · {post.readingTime}
        </p>

        <div className="legal mt-2">{children}</div>

        {faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl text-ink">Frequently asked</h2>
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

        {sources.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl text-ink">Sources</h2>
            <ol className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
              {sources.map((s, i) => (
                <li key={s.url}>
                  <span className="font-mono text-gold-dark">[{i + 1}]</span>{" "}
                  <a
                    href={s.url}
                    rel="nofollow noopener"
                    target="_blank"
                    className="underline decoration-ink/20 underline-offset-2 hover:text-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        )}

        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl text-ink">Keep reading</h2>
            <ul className="mt-4 space-y-3">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block rounded-2xl bg-paper-2 p-5 ring-1 ring-ink/5 transition hover:ring-gold/50"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                      {p.category} · {p.readingTime}
                    </span>
                    <span className="mt-2 block font-display text-lg leading-snug text-ink">
                      {p.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
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
