import type { Metadata } from "next";
import Link from "next/link";
import PostShell, { type Faq } from "@/components/PostShell";

const TITLE = "What Is a Power Window? Your Cycle's Strongest Days, Explained";
const DESCRIPTION =
  "The power window is the stretch of your menstrual cycle — late follicular through ovulation — when strength and power output tend to peak. Here's the science, the one caution, and how to find yours.";

export const metadata: Metadata = {
  title: "What Is a Power Window? Your Strongest Cycle Days",
  description: DESCRIPTION,
  alternates: { canonical: "/blog/what-is-a-power-window" },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const faqs: Faq[] = [
  {
    q: "When is the power window in a 28-day cycle?",
    a: "Roughly days 12–15 — the two days before ovulation through the day after it. With a different cycle length, anchor it to ovulation: for training purposes, ovulation is commonly estimated at about 14 days before your next period starts.",
  },
  {
    q: "Should I only attempt PRs in my power window?",
    a: "No — a PR is a PR whenever it happens. But if you're choosing when to schedule max-effort attempts, the power window is where research (and most lifters' own logged data) says they're most likely to succeed.",
  },
  {
    q: "How does Phase predict my power window?",
    a: "From your cycle history: it estimates ovulation from your logged or Apple Health cycle data, widens the window when your cycles vary, labels everything as an estimate, and refines its predictions as more of your cycles and sessions are logged.",
  },
];

export default function Post() {
  return (
    <PostShell
      title={TITLE}
      description={DESCRIPTION}
      slug="what-is-a-power-window"
      faqs={faqs}
      related={[
        "does-cycle-syncing-actually-work",
        "follicular-phase-workouts",
        "cycle-syncing-workout-plan",
      ]}
    >
      <p>
        The <strong>power window</strong>{" "}is the stretch of your menstrual
        cycle when your body is most primed to produce force — typically the
        late-follicular days through ovulation, when estrogen peaks. If
        you&apos;ve ever had a session where every weight moved like it was
        greased, there&apos;s a decent chance it landed here.
      </p>

      <h2>The science, briefly</h2>
      <p>
        Estrogen rises through the follicular phase and peaks just before
        ovulation. Research links this high-estrogen stretch with higher power
        output, better strength adaptations from training, and — in several
        studies — a disproportionate share of personal records. After ovulation,
        progesterone rises, core temperature climbs, and many people find the
        same loads feel harder. That contrast is why the window stands out so
        clearly when you chart strength against cycle phase.
      </p>

      <h2>The one caution</h2>
      <p>
        The same hormonal peak is associated with increased ligament laxity —
        looser joints — around ovulation, which research connects to elevated
        ACL injury risk in sport. The practical translation isn&apos;t fear;
        it&apos;s a longer warm-up before maximal knee-dominant work and no
        max-effort plyometrics during the window. Push hard — prepared.
      </p>

      <h2>How to find yours</h2>
      <ul>
        <li>
          <strong>Estimate:</strong> ovulation ≈ 14 days before your next
          period; the power window runs from about two days before it to one day
          after.
        </li>
        <li>
          <strong>Verify with data:</strong> log your lifts and check where your
          best sessions cluster. A few cycles of honest logging usually makes
          the pattern unmistakable — this is a core part of a{" "}
          <Link href="/blog/cycle-syncing-workout-plan">
            cycle syncing workout plan
          </Link>
          .
        </li>
        <li>
          <strong>Or automate it:</strong> <Link href="/">Phase</Link> predicts
          your next power window weeks ahead from your Apple Health cycle data,
          flags PR-eligible days, adds the laxity-caution warm-up automatically,
          and charts every lift by phase so you can <em>see</em>{" "}your window in
          your own numbers. It&apos;s the layer{" "}
          <Link href="/blog/best-workout-tracker-for-women">
            no other workout tracker
          </Link>{" "}
          ships.
        </li>
      </ul>
    </PostShell>
  );
}
