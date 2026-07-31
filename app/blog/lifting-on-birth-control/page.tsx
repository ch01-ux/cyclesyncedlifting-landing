import type { Metadata } from "next";
import Link from "next/link";
import PostShell, { Answer, PostLink, type Faq, type Source } from "@/components/PostShell";

export const revalidate = 3600;

const TITLE = "Lifting on Birth Control: Does Hormonal Contraception Affect Strength?";
const DESCRIPTION =
  "A multilevel meta-analysis compared hormonal contraceptive users with non-users on strength, power and muscle growth. The answer is reassuring — and it changes how you should plan your training, because most methods mean there are no phases to plan around.";

export const metadata: Metadata = {
  title: "Lifting on Birth Control: Does It Affect Strength & Muscle?",
  description: DESCRIPTION,
  alternates: { canonical: "/blog/lifting-on-birth-control" },
  openGraph: {
    type: "article",
    url: "https://cyclesyncedlifting.com/blog/lifting-on-birth-control",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const faqs: Faq[] = [
  {
    q: "Does birth control affect muscle growth or strength gains?",
    a: "Not meaningfully. A systematic review and multilevel meta-analysis published in Sports Medicine compared hormonal contraceptive users with non-users on hypertrophy, power and strength adaptations to resistance training and found no meaningful difference between groups. Resistance training works about equally well either way.",
  },
  {
    q: "Can I still do cycle-synced training on the pill?",
    a: "Not in any real sense, and you should be suspicious of an app that says you can. Combined hormonal contraception suppresses the natural hormonal cycle, so there are no follicular or luteal phases to synchronise with. The bleed in your pill-free week is a withdrawal bleed, not a period.",
  },
  {
    q: "Is the bleed on the pill the same as a period?",
    a: "No. It is a withdrawal bleed caused by the drop in hormones during the placebo or hormone-free days, not the end of a natural ovulatory cycle. That is why using it as a training landmark does not tell you anything the way a real cycle can.",
  },
  {
    q: "What about a hormonal IUD or implant?",
    a: "It varies by method and by person — with some progestin-only methods, ovulation continues at least some of the time; with others it is largely suppressed. If you are unsure whether you are ovulating, treat your training as if you are not and program linearly. Questions about your specific method belong with your healthcare provider.",
  },
  {
    q: "Should I stop taking birth control to train better?",
    a: "That is a medical decision, not a training one, and the performance evidence does not support making it for training reasons — differences between users and non-users are trivial at most. Talk to a healthcare provider about contraception; do not let a fitness app influence that choice.",
  },
];

const sources: Source[] = [
  {
    label:
      "Nolan et al. (2023). The Effect of Hormonal Contraceptive Use on Skeletal Muscle Hypertrophy, Power and Strength Adaptations to Resistance Exercise Training: A Systematic Review and Multilevel Meta-analysis. Sports Medicine.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10798924/",
  },
  {
    label:
      "Elliott-Sale et al. (2020). The Effects of Oral Contraceptives on Exercise Performance in Women: A Systematic Review and Meta-analysis. Sports Medicine, 50, 1785–1812.",
    url: "https://link.springer.com/article/10.1007/s40279-020-01317-5",
  },
  {
    label:
      "Myllyaho et al. (2018). Hormonal Contraceptive Use Does Not Affect Strength, Endurance, or Body Composition Adaptations to Combined Strength and Endurance Training in Women.",
    url: "https://pubmed.ncbi.nlm.nih.gov/29927884/",
  },
  {
    label:
      "Perceived impact of the menstrual cycle and hormonal contraceptives on physical exercise and performance in 1,086 athletes from 57 sports (2022). Frontiers in Physiology, 13, 954760.",
    url: "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2022.954760/full",
  },
];

export default function Post() {
  return (
    <PostShell
      title={TITLE}
      description={DESCRIPTION}
      slug="lifting-on-birth-control"
      faqs={faqs}
      sources={sources}
      related={[
        "does-cycle-syncing-actually-work",
        "best-workout-tracker-for-women",
        "luteal-phase-workouts",
      ]}
    >
      <Answer>
        <p>
          <strong>No meaningful effect on your gains — but it does remove the
          phases.</strong> A multilevel meta-analysis in <em>Sports Medicine</em> found
          no meaningful difference between hormonal contraceptive users and
          non-users in strength, power or muscle growth from resistance training.
          What changes is planning: combined methods suppress the natural cycle,
          so there is nothing to sync to.
        </p>
      </Answer>

      <p>
        Somewhere between a quarter and a half of women who lift are on hormonal
        contraception at any given time, and almost every piece of
        cycle-training content quietly ignores them. Worse, some apps invent
        phases for contraceptive users anyway — drawing a follicular band and an
        ovulation estimate on a cycle that is being suppressed. That is not a
        simplification; it is a fabrication.
      </p>

      <h2>The evidence on adaptations</h2>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Study</th>
              <th>Comparison</th>
              <th>Finding</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Nolan et al., 2023</strong>
                <br />
                <em>Sports Medicine</em>
              </td>
              <td>
                Systematic review + multilevel meta-analysis: hormonal
                contraceptive users vs non-users, resistance training
              </td>
              <td>
                <strong>No meaningful difference</strong> in hypertrophy, power or
                strength adaptations
              </td>
            </tr>
            <tr>
              <td>
                <strong>Elliott-Sale et al., 2020</strong>
                <br />
                <em>Sports Medicine</em>
              </td>
              <td>
                Systematic review + meta-analysis of oral contraceptives and
                exercise performance
              </td>
              <td>
                Any difference between users and non-users was{" "}
                <strong>trivial</strong>, on low-quality evidence
              </td>
            </tr>
            <tr>
              <td>
                <strong>Myllyaho et al., 2018</strong>
              </td>
              <td>
                Combined strength and endurance training programme, users vs
                non-users
              </td>
              <td>
                <strong>No difference</strong> in strength, endurance or body
                composition outcomes
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The practical translation is short: <strong>train normally.</strong> Progressive
        overload works the same, protein does the same job, and your programme
        does not need a contraception-specific version.
      </p>

      <h2>What actually changes: there is no cycle to plan around</h2>
      <p>
        Combined hormonal contraception — the combined pill, patch and ring —
        works largely by preventing ovulation, which flattens the natural rise
        and fall of estrogen and progesterone. That has one direct consequence
        for training software: <strong>there are no phases.</strong>
      </p>
      <p>
        The bleed during your hormone-free days is a <strong>withdrawal bleed</strong>,
        not a period. It is a response to stopping the hormones, not the end of
        an ovulatory cycle. So it cannot be used as a landmark to estimate
        ovulation, because nothing is being estimated — and any &quot;power
        window&quot; drawn from it is decoration.
      </p>
      <p>
        Progestin-only methods are less uniform. With some, ovulation continues
        at least part of the time; with others it is largely suppressed. If you
        do not know which applies to you, the safe training assumption is{" "}
        <strong>program linearly</strong> — and ask your healthcare provider about the
        method itself, which is a medical question and not one a training app
        should be answering.
      </p>

      <h2>Symptoms still exist</h2>
      <p>
        &quot;No phases&quot; does not mean &quot;no bad days.&quot; In the survey of
        1,086 athletes across 57 sports, contraceptive users still reported
        symptoms affecting their exercise — often clustered around the
        hormone-free interval. Headaches, low mood and fatigue do not care
        whether the underlying event is a period or a withdrawal bleed.
      </p>
      <p>
        The response is the same one that works for everyone:{" "}
        <strong>autoregulate</strong>. If today’s working weight comes in two RPE
        points harder than last week, drop the load or a set. That rule needs no
        hormone data at all — it just needs you to log honestly.
      </p>

      <h2>What to track instead of phases</h2>
      <ol>
        <li>
          <strong>Load × reps, every session.</strong> Your actual scoreboard, and
          the only thing that proves progress.
        </li>
        <li>
          <strong>RPE.</strong> The cheapest early-warning signal for accumulated
          fatigue there is.
        </li>
        <li>
          <strong>A daily energy or soreness note.</strong> Three taps. Over a few
          months, patterns show up that no calendar predicted — including
          patterns around your hormone-free week.
        </li>
        <li>
          <strong>Sleep.</strong> It outperforms every hormonal variable as a
          predictor of how a session will go.
        </li>
      </ol>

      <h2>How Phase handles hormonal contraception</h2>
      <p>
        <Link href="/">Phase</Link> asks about hormonal contraception during
        onboarding, and if you say yes it does something deliberately boring:{" "}
        <strong>it stops predicting phases.</strong> No invented follicular band, no
        fake ovulation estimate, no power-window promises. The programming falls
        back to honest linear progression and the app keeps doing the parts that
        still work — set logging, double progression, plate maths, rest timer, PR
        detection, estimated-1RM trends, Apple Watch.
      </p>
      <p>
        You still get a real strength tracker. You just do not get theatre. If
        you later come off hormonal contraception and start logging cycles, the
        phase layer switches itself back on.
      </p>
      <p>
        For the wider evidence picture, read{" "}
        <PostLink slug="does-cycle-syncing-actually-work">
          does cycle syncing actually work
        </PostLink>
        , and for how Phase compares with the other options, see{" "}
        <PostLink slug="best-workout-tracker-for-women">
          the workout tracker comparison
        </PostLink>
        .
      </p>
      <p>
        <em>
          Nothing here is medical advice, and none of it is a reason to start or
          stop a contraceptive method. Those conversations belong with a
          healthcare provider.
        </em>
      </p>
    </PostShell>
  );
}
