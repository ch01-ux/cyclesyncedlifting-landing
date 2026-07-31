import type { Metadata } from "next";
import Link from "next/link";
import PostShell, { type Faq } from "@/components/PostShell";

const TITLE = "Lifting on Your Period: What Actually Helps (And What to Skip)";
const DESCRIPTION =
  "Should you lift weights on your period? Short answer: yes, if you feel like it. Here's how to adjust volume, intensity and expectations during your menstrual phase — without losing progress.";

export const metadata: Metadata = {
  title: "Lifting on Your Period — How to Adjust Training",
  description: DESCRIPTION,
  alternates: { canonical: "/blog/lifting-on-your-period" },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const faqs: Faq[] = [
  {
    q: "Is it bad to lift heavy on your period?",
    a: "No — there's no evidence that lifting during menstruation is harmful. Many people simply feel weaker or more fatigued in the first days, so reducing volume and skipping max-effort attempts usually feels better and preserves the habit. If you feel strong, train normally.",
  },
  {
    q: "Will I lose progress if I deload during my period?",
    a: "No. A planned lighter week is standard programming for every serious lifter regardless of cycles — that's what deloads are. Placing yours near menstruation just times it where recovery tends to dip anyway, so it costs nothing.",
  },
  {
    q: "What are the best exercises during menstruation?",
    a: "Whatever you tolerate well: your normal lifts at reduced volume, technique work at lighter loads, mobility, or walking. There are no forbidden exercises — the guidance is about total stress, not specific movements.",
  },
];

export default function Post() {
  return (
    <PostShell
      title={TITLE}
      description={DESCRIPTION}
      slug="lifting-on-your-period"
      faqs={faqs}
      related={[
        "why-am-i-weaker-before-my-period",
        "luteal-phase-workouts",
        "follicular-phase-workouts",
      ]}
    >
      <p>
        The short answer: <strong>yes, you can lift on your period</strong> —
        and if you feel like it, you probably should. The longer answer is that
        the first days of your cycle are a poor time to <em>test</em> strength
        and a fine time to <em>practice</em>{" "}it. Here&apos;s how to adjust so
        period-week training feels sustainable instead of demoralizing.
      </p>

      <h2>What&apos;s actually going on</h2>
      <p>
        In the menstrual phase, estrogen and progesterone are both at their
        lowest. Many people report lower energy, more perceived effort at the
        same loads, and worse sleep in the first couple of days. It varies a lot
        person to person — some feel completely normal, and some even feel
        relief once bleeding starts compared to the late luteal days. The point
        isn&apos;t a rule; it&apos;s that a &ldquo;bad&rdquo; session on day 2
        is <em>predictable physiology</em>, not lost fitness.
      </p>

      <h2>The adjustments that work</h2>
      <ul>
        <li>
          <strong>Cut volume ~20%, keep the movements.</strong> Drop a set from
          each lift rather than skipping the session. Showing up matters more
          than the exact tonnage.
        </li>
        <li>
          <strong>Don&apos;t test maxes.</strong> Save PR attempts for your{" "}
          <Link href="/blog/what-is-a-power-window">power window</Link>{" "}a week
          or so later — they&apos;re far more likely to land there anyway.
        </li>
        <li>
          <strong>Use the &ldquo;move if you feel like it&rdquo; rule.</strong>{" "}
          Commit only to arriving and warming up. If energy shows up, train; if
          it doesn&apos;t, do technique work and go home. Both count.
        </li>
        <li>
          <strong>Track how you actually feel.</strong>{" "}A 30-second energy /
          soreness / sleep check-in builds the dataset that turns &ldquo;I feel
          random&rdquo; into &ldquo;I&apos;m always flat on days 1–2 and fine by
          day 4.&rdquo;
        </li>
      </ul>

      <h2>Where this fits in the bigger picture</h2>
      <p>
        Period-week adjustments are one quarter of a{" "}
        <Link href="/blog/cycle-syncing-workout-plan">
          full cycle syncing workout plan
        </Link>{" "}
        — the same logic that has you easing off now has you pushing PRs near
        ovulation and capping grinders in the luteal phase. Run as a system, the
        light week isn&apos;t a compromise; it&apos;s the recovery that funds
        the heavy weeks.
      </p>
      <p>
        <Link href="/">Phase</Link>{" "}automates the whole thing: it reads your
        cycle from Apple Health, drops your volume automatically when your
        period starts, frames the week as &ldquo;move if you feel like
        it,&rdquo; and gets you back to building the moment your follicular
        phase begins — all inside a{" "}
        <Link href="/blog/best-workout-tracker-for-women">
          real strength tracker
        </Link>{" "}
        with{" "}
        <Link href="/#watch">Apple Watch logging</Link> and{" "}
        <Link href="/#privacy">on-device privacy</Link>.
      </p>
    </PostShell>
  );
}
