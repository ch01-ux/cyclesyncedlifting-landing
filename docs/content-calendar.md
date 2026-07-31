# Content calendar & SEO/AEO plan

How the blog is scheduled, why each post exists, and what to publish next.

---

## How scheduling works

Everything lives in [`app/blog/posts.ts`](../app/blog/posts.ts). The `date`
field **is** the publish date, in UTC:

- Future-dated posts are hidden from `/blog`, excluded from `sitemap.xml`, and
  their URL returns **404**.
- `/blog`, `/sitemap.xml` and every post page set `export const revalidate = 3600`,
  so a scheduled post goes live **within an hour of 00:00 UTC on its date** — no
  redeploy, no cron, no CMS.
- `<PostLink slug="…">` renders a link when the target is live and plain text
  when it is not, so a live post can reference the rest of its cluster without
  ever pointing a reader (or a crawler) at a 404.
- `/blog` shows the next three scheduled titles under "Publishing next" — a
  freshness signal for readers and crawlers.

**To add a post:** create `app/blog/<slug>/page.tsx` using `PostShell`, add one
entry to `POSTS`, add the URL to `public/llms.txt`. Nothing else.

**To change a publish date:** edit `date` and `dateLabel`. That is the whole
operation.

---

## The editorial position (read this before writing anything)

The strong form of cycle syncing — that matching exercise *type* to hormonal
phase produces better results — is **not supported by the evidence**, and the
site says so out loud:

| Study | Finding |
|---|---|
| McNulty et al. 2020, *Sports Medicine* (78 studies, network meta-analysis) | Trivial average effect of phase on performance (ES −0.06, 95% CrI −0.16 to 0.04) |
| Colenso-Semple et al. 2023, *Frontiers in Sports and Active Living* | The existing reviews are inconsistent; underlying evidence mostly low quality |
| Colenso-Semple et al. 2025, *The Journal of Physiology* | No difference in muscle protein synthesis between follicular and luteal phases |
| Nolan et al. 2023, *Sports Medicine* | No meaningful difference in adaptations between hormonal contraceptive users and non-users |

What **is** well documented: symptom burden (74% period pain, 78% premenstrual
symptoms across 1,086 athletes) and a luteal core-temperature rise of roughly
0.3–0.5 °C that raises perceived effort — *in the subset of people with a large
progesterone response*.

So the line every post holds is:

> **Cycle phase is worth observing, not prescribing.** A calendar is a
> hypothesis; your logbook is the test.

This is not a hedge — it is the differentiator. Every competitor in this space
overclaims, so the honest, sourced version is the one with information gain, the
one AI assistants can safely cite, and the one that survives a journalist or a
sports scientist reading it. Do not write a post that contradicts it.

---

## Published & scheduled

| Date | Slug | Type | Primary query cluster |
|---|---|---|---|
| 2026-07-05 | `best-workout-tracker-for-women` | BOFU comparison | best workout tracker for women, Strong/Hevy alternative for women |
| 2026-07-05 | `cycle-syncing-workout-plan` | Pillar | cycle syncing workout plan, training by phase |
| 2026-07-05 | `lifting-on-your-period` | Spoke (menstrual) | lifting on your period, working out on period |
| 2026-07-05 | `what-is-a-power-window` | Glossary / spoke (ovulatory) | power window, strongest days of cycle |
| **2026-08-01** | `does-cycle-syncing-actually-work` | **Authority / AEO flagship** | does cycle syncing work, cycle syncing debunked, is cycle syncing real |
| **2026-08-10** | `why-am-i-weaker-before-my-period` | Exact-question TOFU | why am I weaker before my period, weak before period lifting |
| **2026-08-17** | `luteal-phase-workouts` | Spoke (luteal) | luteal phase workouts, training in luteal phase, luteal deload |
| **2026-08-24** | `follicular-phase-workouts` | Spoke (follicular) | follicular phase workouts, best time to lift heavy |
| **2026-08-31** | `lifting-on-birth-control` | Under-served BOFU | lifting on birth control, does birth control affect muscle gain |
| **2026-09-07** | `period-tracker-privacy` | Trust / differentiator | is my period tracker private, safest period app |

Cadence: roughly one post a week, which is the top of the sustainable 2–4/month
band. If quality slips, drop to fortnightly — thin posts do not rank and are
never cited.

---

## The cluster map

```
                cycle-syncing-workout-plan  (pillar)
                            │
   ┌──────────────┬─────────┴─────────┬──────────────┐
menstrual      follicular         ovulatory       luteal
lifting-on-    follicular-        what-is-a-      luteal-
your-period    phase-workouts     power-window    phase-workouts
   └──────────────┴─────────┬─────────┴──────────────┘
                            │
        does-cycle-syncing-actually-work  (evidence hub — every
                            │              spoke links up to it)
        ┌───────────────────┼───────────────────┐
why-am-i-weaker-     lifting-on-          best-workout-
before-my-period     birth-control        tracker-for-women (BOFU)
                            │
                  period-tracker-privacy (trust)
```

All four phases now have a dedicated page. That completeness is itself a topical
authority signal — the cluster answers every "what do I do in X phase" query
variant instead of one or two.

---

## AEO checklist applied to every post

Each new post ships with:

- **Answer-first block** (`<Answer>`) directly under the H1 — a 40–60 word direct
  answer, which is what AI assistants and featured snippets lift verbatim.
- **Question-form H2s and a 5-question FAQ** with `FAQPage` schema, phrased the
  way people actually ask assistants.
- **Dated, attributed statistics** — study, journal, year, effect size. Vague
  claims never get cited; "78 studies, effect size −0.06" does.
- **A comparison table** — the most extractable block format there is.
- **A visible `Sources` list** with links, plus `citation` entries in the
  `BlogPosting` JSON-LD.
- **Visible author and date**, `BreadcrumbList` schema, `Blog` schema on the
  index.
- **2–4 internal links** into the cluster plus a `related` block.

---

## Next up — briefs for posts 7–12

Keep the weekly slot filled. Each is a real query with an information-gain angle:

1. **`creatine-and-your-cycle`** — "creatine for women", "creatine and period".
   High volume, genuinely under-covered. Anchor on the 2025 *JISSN* review
   *Creatine in women's health*. Angle: what creatine does and does not do across
   the cycle, without the supplement-industry overclaiming.
2. **`how-to-track-strength-across-your-cycle`** — JTBD. The spreadsheet version
   first (so it is genuinely useful), then Phase as the faster path. Natural
   home for a screenshot of the phase-coloured e1RM chart.
3. **`what-is-e1rm`** — glossary/BOFU-adjacent. Epley formula, why it beats
   testing a true 1RM, worked examples. Candidate for a free on-page calculator,
   which earns links passively.
4. **`should-i-deload-on-my-period`** — exact question, low competition. Answer:
   earn deloads from logged RPE, not the calendar. Links to luteal + menstrual
   spokes.
5. **`apple-health-cycle-tracking-for-lifters`** — high-intent how-to: setting up
   cycle logging in Apple Health, granting read access, what Phase does with it.
   Reinforces the privacy story.
6. **`strength-training-in-perimenopause`** — adjacent audience with large and
   growing search demand, and a bridge to the Thrive app. Requires its own
   research pass; do not extrapolate from the menstrual-cycle literature.

---

## Post-publish routine (do this every time)

1. **Bing Webmaster Tools** — submit the URL. ChatGPT Search runs on Bing's
   index; skipping this is the single most common AEO mistake.
2. **Google Search Console** — URL Inspection → Request Indexing.
3. **Perplexity** is the fastest feedback loop (1–4 weeks). Test the target
   question there monthly and log whether the site is cited.
4. Keep a prompt log: 20–30 buyer questions ("does cycle syncing work", "best
   workout tracker for women who lift", "should I lift on my period"), run
   monthly across ChatGPT, Perplexity, Gemini and Google AI Overviews, record
   whether Phase is cited and which competitors are.

Realistic timeline: indexing in days, first Perplexity citations in 4–12 weeks,
meaningful Google rankings on a young domain in 3–6 months. Nothing here is
instant.
