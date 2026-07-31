import type { Metadata } from "next";
import Link from "next/link";
import PostShell, { Answer, PostLink, type Faq, type Source } from "@/components/PostShell";

export const revalidate = 3600;

const TITLE = "Follicular Phase Workouts: How to Use Your Best Training Weeks";
const DESCRIPTION =
  "Most lifters feel best in the two weeks after their period starts. Here is how to turn that into actual progressive overload — a build block, a progression rule, and the one caution worth taking at ovulation.";

export const metadata: Metadata = {
  title: "Follicular Phase Workouts: Build Block & Progression Guide",
  description: DESCRIPTION,
  alternates: { canonical: "/blog/follicular-phase-workouts" },
  openGraph: {
    type: "article",
    url: "https://cyclesyncedlifting.com/blog/follicular-phase-workouts",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const faqs: Faq[] = [
  {
    q: "What is the follicular phase?",
    a: "The follicular phase starts on day one of your period and runs until ovulation — usually about 14 days in a 28-day cycle, though this is the part of the cycle that varies most between people and between months. Estrogen rises across it and peaks just before ovulation.",
  },
  {
    q: "Should I train harder in my follicular phase?",
    a: "Train progressively, which is not quite the same thing. Adding load or reps every week is what drives strength, and the follicular phase is a convenient place to schedule that progression because symptom load is usually lowest. But the gains come from the progression, not from the phase.",
  },
  {
    q: "Is the follicular phase really the best time to build muscle?",
    a: "No — a 2025 study in The Journal of Physiology measured muscle protein synthesis after resistance exercise and found no difference between the follicular and luteal phases. What is often better in the follicular phase is how you feel, which affects how much quality work you actually complete.",
  },
  {
    q: "When should I attempt a personal record?",
    a: "On a day when you are well-slept, well-fed, and your warm-up weights are moving fast — those three beat any calendar. Many lifters find those days cluster in the late-follicular and ovulatory stretch, which is why it is worth logging: you are looking for your own pattern, not a universal one.",
  },
  {
    q: "Do I need a longer warm-up around ovulation?",
    a: "It is a cheap hedge. Estrogen peaks around ovulation and some research associates that with increased knee laxity and ACL injury risk, though systematic reviews rate the evidence low quality and inconclusive. An extra five minutes of warm-up before heavy squats costs you nothing either way.",
  },
];

const sources: Source[] = [
  {
    label:
      "Colenso-Semple et al. (2025). Menstrual cycle phase does not influence muscle protein synthesis or whole-body myofibrillar proteolysis in response to resistance exercise. The Journal of Physiology.",
    url: "https://physoc.onlinelibrary.wiley.com/doi/10.1113/JP287342",
  },
  {
    label:
      "McNulty et al. (2020). The Effects of Menstrual Cycle Phase on Exercise Performance in Eumenorrheic Women: A Systematic Review and Meta-Analysis. Sports Medicine, 50(10), 1813–1827.",
    url: "https://pubmed.ncbi.nlm.nih.gov/32661839/",
  },
  {
    label:
      "Herzberg et al. (2017). The Effect of Menstrual Cycle and Contraceptives on ACL Injuries and Laxity: A Systematic Review and Meta-analysis. Orthopaedic Journal of Sports Medicine.",
    url: "https://journals.sagepub.com/doi/10.1177/2325967117718781",
  },
  {
    label:
      "Effects of the menstrual cycle phase on ACL neuromuscular and biomechanical injury risk surrogates: a systematic review (2023). PLOS ONE.",
    url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0280800",
  },
];

export default function Post() {
  return (
    <PostShell
      title={TITLE}
      description={DESCRIPTION}
      slug="follicular-phase-workouts"
      faqs={faqs}
      sources={sources}
      related={[
        "what-is-a-power-window",
        "luteal-phase-workouts",
        "does-cycle-syncing-actually-work",
        "cycle-syncing-workout-plan",
      ]}
    >
      <Answer>
        <p>
          <strong>Use them for progression, not for a different program.</strong>{" "}
          The follicular phase — day one of your period through ovulation — is
          where most lifters report the lowest symptom load, so it is the easiest
          place to add load or reps and complete full sessions. The advantage
          comes from the work you actually finish, not from the hormones.
        </p>
      </Answer>

      <p>
        Ask a room of lifters when they feel best and a lot of hands go up for
        &quot;the week or two after my period starts.&quot; That is the follicular
        phase, and it is worth using well — as long as you are clear about why it
        feels good, because the popular explanation and the real one lead to
        different training decisions.
      </p>

      <h2>What is happening</h2>
      <p>
        The follicular phase begins on day one of bleeding and ends at ovulation.
        Estrogen rises through it and peaks just before ovulation. It is also the
        part of the cycle whose <em>length</em> varies most — when your cycles run
        long or short, this is usually the section doing the varying, while the
        luteal phase stays near 12–14 days.
      </p>
      <p>
        The popular story is that rising estrogen makes you stronger. The honest
        version is narrower. A meta-analysis of 78 studies found only trivial
        average differences between phases, and its single largest contrast was
        between the <em>early</em> and <em>late</em> follicular phase — in other
        words, mostly the difference between &quot;on your period&quot; and &quot;a
        week later.&quot; Much of that gap is symptom relief, not a hormonal
        performance boost.
      </p>
      <p>
        Which is good news, practically speaking: it means your best weeks are
        driven by things you can influence — sleep, food, symptom management —
        rather than by a hormone you cannot.
      </p>

      <h2>How to structure a follicular build block</h2>
      <p>
        Two to three weeks is roughly the length of the follicular phase, which
        happens to be the length of a sensible build block. Keep the same lifts
        all the way through and let the load do the moving.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Stretch</th>
              <th>Focus</th>
              <th>Practical rule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Days 1–5 (period)</td>
              <td>Re-entry</td>
              <td>
                Train as normal if you feel able; drop conditioning before you
                drop the main lift — see{" "}
                <PostLink slug="lifting-on-your-period">
                  lifting on your period
                </PostLink>
              </td>
            </tr>
            <tr>
              <td>Days 6–11</td>
              <td>Build</td>
              <td>
                Add load or reps every session where the previous one hit the top
                of its rep range at or below target RPE
              </td>
            </tr>
            <tr>
              <td>Days 12–15 (late follicular → ovulation)</td>
              <td>Express</td>
              <td>
                Best window for a heavy top set or PR attempt if the warm-ups are
                flying; extend the warm-up before heavy knee-dominant work
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The progression rule that does the work</h2>
      <p>
        Feeling good is not progress. Writing down a bigger number is. Use double
        progression, which turns &quot;I felt strong&quot; into something your
        logbook can verify:
      </p>
      <ol>
        <li>
          Pick a rep range for each lift — say 5–8 for a main lift, 8–12 for
          accessories.
        </li>
        <li>
          Keep the weight constant and add reps session to session until you hit
          the <strong>top</strong> of the range on all sets, at or below your target
          RPE.
        </li>
        <li>
          Then add weight — roughly <strong>2.5 kg (5 lb) on upper-body lifts and 5
          kg (10 lb) on lower-body lifts</strong> — and drop back to the bottom of the
          rep range.
        </li>
        <li>Repeat. That is the whole engine.</li>
      </ol>
      <p>
        Do this consistently through your best weeks and you will carry a heavier
        baseline into your harder ones. That is what makes a good follicular
        phase valuable — not a two-week hormonal window, but a permanently
        higher starting point.
      </p>

      <h2>The handoff at ovulation</h2>
      <p>
        The late-follicular and ovulatory days are where a lot of lifters find
        their best sessions cluster — the stretch we call{" "}
        <PostLink slug="what-is-a-power-window">a power window</PostLink>. Two
        honest notes about it:
      </p>
      <ul>
        <li>
          <strong>It is a personal pattern, not a physical law.</strong> Some
          people see a clear cluster in their own data; some see nothing. Both
          results are normal, and only your logbook can tell you which you are.
        </li>
        <li>
          <strong>The laxity caution is worth taking anyway.</strong> Some
          research links the high-estrogen preovulatory stretch with greater knee
          laxity and higher ACL injury rates — one study of recreational skiers
          reported roughly three times the odds of injury preovulatory versus
          postovulatory. But a 2023 systematic review of the biomechanical
          evidence rated it low-to-very-low quality and inconclusive. The
          sensible response to genuinely uncertain evidence with a cheap hedge:
          add five minutes of warm-up and skip max-effort plyometrics before
          heavy squats. Push hard — prepared.
        </li>
      </ul>

      <h2>What not to do with a good week</h2>
      <ul>
        <li>
          <strong>Do not add a fourth or fifth session</strong> you cannot sustain
          all month. Volume you only do in your good weeks is volume your body
          never adapts to.
        </li>
        <li>
          <strong>Do not chase a PR every session.</strong> Maximal attempts cost
          recovery. One heavy expression per lift per block is plenty.
        </li>
        <li>
          <strong>Do not change exercises</strong> just because you feel capable of
          more. Progression needs the same movement, measured the same way.
        </li>
        <li>
          <strong>Do not plan to write off the second half of the month.</strong>{" "}
          Muscle protein synthesis after lifting is the same in both halves —{" "}
          <PostLink slug="luteal-phase-workouts">
            the luteal phase guide
          </PostLink>{" "}
          covers how to keep training through it.
        </li>
      </ul>

      <h2>How Phase runs your build weeks</h2>
      <p>
        <Link href="/">Phase</Link> handles the bookkeeping: it runs double
        progression automatically from your logged sets, tells you when a lift
        has earned its increment, flags PR-eligible days in your late-follicular
        and ovulatory stretch, and adds the extended warm-up prompt before heavy
        knee-dominant work in the laxity window. Every session is stamped with
        the phase it happened in, so after three cycles your estimated-1RM chart
        shows whether your best weeks really are where you think they are.
      </p>
    </PostShell>
  );
}
