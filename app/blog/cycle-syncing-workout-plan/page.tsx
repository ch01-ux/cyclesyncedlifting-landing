import type { Metadata } from "next";
import Link from "next/link";
import PostShell, { type Faq } from "@/components/PostShell";

const TITLE = "Cycle Syncing Workout Plan: How to Train in Every Phase (4-Week Template)";
const DESCRIPTION =
  "A practical cycle syncing workout plan for lifters: what to do in your menstrual, follicular, ovulatory and luteal phases, plus a 4-week strength template you can start this cycle.";

export const metadata: Metadata = {
  title: "Cycle Syncing Workout Plan — 4-Week Strength Template",
  description: DESCRIPTION,
  alternates: { canonical: "/blog/cycle-syncing-workout-plan" },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const faqs: Faq[] = [
  {
    q: "How do I start cycle syncing my workouts?",
    a: "Track your cycle (Apple Health works), note the day your period starts, and map your month: build through the follicular phase, push intensity around ovulation, moderate volume in the luteal phase, and deload near your period. Or let an app like Phase build the plan automatically from your cycle data.",
  },
  {
    q: "Can I still train hard in my luteal phase?",
    a: "Yes — moderate doesn't mean easy. Keep lifting, but cap grinding reps (leave 1–2 in reserve), add rest between sets, and don't chase PRs. Many people feel noticeably better training this way through the second half of their cycle.",
  },
  {
    q: "What if my cycle is irregular?",
    a: "Use ranges instead of fixed days and let logged data sharpen the picture over time. Phase widens its phase estimates when your cycle varies and labels everything as an estimate — the plan adapts as it learns your pattern.",
  },
];

const phaseRows = [
  ["Menstrual (≈ days 1–5)", "Deload / gentle volume", "Volume −20%, technique focus, mobility optional — move if you feel like it"],
  ["Follicular (≈ days 6–11)", "Build", "Progressive loading, normal program, add reps or weight week to week"],
  ["Ovulatory (≈ days 12–15)", "Peak — the power window", "PR attempts encouraged; warm up thoroughly (research links ovulation with looser ligaments)"],
  ["Luteal (≈ days 16–28)", "Moderate", "Volume-moderate, RPE-capped, extra rest; late-luteal deload if your cycle runs long"],
];

export default function Post() {
  return (
    <PostShell
      title={TITLE}
      description={DESCRIPTION}
      slug="cycle-syncing-workout-plan"
      date="2026-07-05"
      dateLabel="July 5, 2026"
      readingTime="9 min read"
      category="Training guides"
      faqs={faqs}
    >
      <p>
        A <strong>cycle syncing workout plan</strong>{" "}means matching your
        training stress to the phase of your menstrual cycle — pushing hardest
        when your physiology supports it and pulling back when recovery dips.
        It&apos;s not about training less. It&apos;s about putting your hardest
        sessions where they land best. Here&apos;s the practical version for
        people who lift, ending with a 4-week template you can run this cycle.
      </p>

      <h2>Why sync training to your cycle at all?</h2>
      <p>
        Research suggests strength and power output tend to peak when estrogen
        is high — the late-follicular and ovulatory phases — and that the luteal
        phase often brings elevated core temperature, higher perceived exertion,
        and slower recovery for many people. Training identically through both
        halves of the month means fighting your physiology half the time. (This
        is also why a{" "}
        <Link href="/blog/best-workout-tracker-for-women">
          generic workout tracker
        </Link>{" "}
        can make you feel like you&apos;re randomly failing — the program never
        bends, so you blame yourself.)
      </p>

      <h2>The four phases, translated to training</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-ink text-left text-paper">
              <th className="p-3 font-mono text-xs uppercase tracking-wider">Phase</th>
              <th className="p-3 font-mono text-xs uppercase tracking-wider">Intent</th>
              <th className="p-3 font-mono text-xs uppercase tracking-wider">What that means</th>
            </tr>
          </thead>
          <tbody>
            {phaseRows.map((r, i) => (
              <tr key={r[0]} className={i % 2 ? "bg-paper-2" : "bg-paper"}>
                {r.map((cell, j) => (
                  <td key={j} className="border-b border-ink/5 p-3 align-top text-ink/80">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Day ranges assume a 28-day cycle — yours may differ, and that&apos;s
        normal. The ovulatory window is what we call the{" "}
        <Link href="/blog/what-is-a-power-window">power window</Link>: your
        cycle&apos;s statistically strongest days.
      </p>

      <h2>The 4-week template</h2>
      <p>
        Assume 3 lifting days per week built around squat, hinge, push and pull
        patterns. Start the template on day 1 of your period.
      </p>
      <ul>
        <li>
          <strong>Week 1 — menstrual → early follicular.</strong> Same exercises,
          about 20% less volume (drop a set from each lift). Nothing heroic; if
          energy shows up, ride it.{" "}
          <Link href="/blog/lifting-on-your-period">
            Lifting on your period is fine
          </Link>{" "}
          if you feel like it.
        </li>
        <li>
          <strong>Week 2 — follicular build.</strong> Full program. Add weight or
          reps versus your last comparable session. This is where consistent
          progressive overload pays off.
        </li>
        <li>
          <strong>Week 3 — power window.</strong> Intensity peak: top sets heavy,
          PR attempts welcome. One caution: research associates ovulation with
          increased ligament laxity — take the full warm-up before anything
          maximal, especially knee-dominant lifts.
        </li>
        <li>
          <strong>Week 4 — luteal.</strong> Keep moving weight, but cap effort at
          RPE 8 (no grinders), add 30–60s of rest between sets, and hold volume
          steady instead of pushing it. If your cycle runs 26+ days, treat the
          last few days as a mini-deload.
        </li>
      </ul>

      <h2>Making it stick (without spreadsheets)</h2>
      <p>
        The hard part isn&apos;t the idea — it&apos;s the bookkeeping. Your cycle
        doesn&apos;t reset on Mondays, phases shift with your actual data, and a
        plan you have to recalculate every month is a plan you&apos;ll quit.
        That&apos;s the entire reason we built{" "}
        <Link href="/">Phase</Link>: it reads your cycle from Apple Health,
        rebuilds this exact structure around <em>your</em> dates automatically,
        predicts your{" "}
        <Link href="/#features">next power window weeks ahead</Link>, and logs
        every set like a{" "}
        <Link href="/blog/best-workout-tracker-for-women">
          serious strength tracker
        </Link>{" "}
        — with an{" "}
        <Link href="/#watch">Apple Watch app</Link> for the gym floor. Your{" "}
        <Link href="/#privacy">cycle data never leaves your device</Link>.
      </p>
    </PostShell>
  );
}
