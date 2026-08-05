/**
 * Single source of truth for the blog.
 *
 * The index, the sitemap and each post page all read from this registry, so a
 * post is added in exactly one place. `date` doubles as the **publish date**:
 * anything dated in the future is hidden from the index and the sitemap, and
 * its URL 404s until the date arrives. Pages that depend on "now" set
 * `export const revalidate = 3600`, so scheduled posts go live within an hour
 * of their date without anyone redeploying the site.
 */

export type Post = {
  slug: string;
  /** Card/index headline. The <title> lives in each page's own metadata. */
  title: string;
  excerpt: string;
  /** Publish date, UTC, "YYYY-MM-DD". Future dates are scheduled, not live. */
  date: string;
  /** Human label for the byline, e.g. "August 3, 2026". */
  dateLabel: string;
  /** Set when a post is materially revised; feeds BlogPosting.dateModified. */
  updated?: string;
  updatedLabel?: string;
  readingTime: string;
  category: string;
  /** Sitemap priority. Pillar/BOFU posts sit higher. */
  priority: number;
};

export const POSTS: Post[] = [
  {
    slug: "best-cycle-syncing-apps",
    title: "The Best Cycle Syncing Apps in 2026: 9 Compared, Honestly",
    excerpt:
      "Most lists in this category are padded with period trackers and meditation apps. We compared the nine that actually change your training — Wild.AI, FitrWoman, Jennis, Sync N, Drop It and the rest — and named a winner per use case.",
    date: "2026-08-05",
    dateLabel: "August 5, 2026",
    readingTime: "11 min read",
    category: "Comparison",
    priority: 0.9,
  },
  {
    slug: "does-cycle-syncing-actually-work",
    title: "Does Cycle Syncing Actually Work? What 78 Studies Say",
    excerpt:
      "We build a cycle-aware training app, and we'll say it plainly: the strong version of cycle syncing isn't supported by the evidence. Here's what the research does show — and what to do with it.",
    date: "2026-08-01",
    dateLabel: "August 1, 2026",
    readingTime: "10 min read",
    category: "The evidence",
    priority: 0.9,
  },
  {
    slug: "why-am-i-weaker-before-my-period",
    title: "Why Am I Weaker Before My Period? (And Why You Probably Aren't)",
    excerpt:
      "The bar feels heavier, the sets feel longer, and the numbers usually haven't moved. Here's what's actually changing in the week before your period — and the four dials worth adjusting.",
    date: "2026-08-10",
    dateLabel: "August 10, 2026",
    readingTime: "8 min read",
    category: "Training guide",
    priority: 0.8,
  },
  {
    slug: "luteal-phase-workouts",
    title: "Luteal Phase Workouts: How to Train When Everything Feels Heavier",
    excerpt:
      "You don't need a different program for your luteal phase — you need three adjustable dials. What to change, what to leave alone, and the myth that costs women the most progress.",
    date: "2026-08-17",
    dateLabel: "August 17, 2026",
    readingTime: "9 min read",
    category: "Training guide",
    priority: 0.8,
  },
  {
    slug: "follicular-phase-workouts",
    title: "Follicular Phase Workouts: How to Use Your Best Training Weeks",
    excerpt:
      "Most lifters feel best in the two weeks after their period starts. Here's how to turn that into progressive overload instead of one good session you never repeat.",
    date: "2026-08-24",
    dateLabel: "August 24, 2026",
    readingTime: "8 min read",
    category: "Training guide",
    priority: 0.8,
  },
  {
    slug: "lifting-on-birth-control",
    title: "Lifting on Birth Control: Does Hormonal Contraception Affect Strength?",
    excerpt:
      "A multilevel meta-analysis compared hormonal contraceptive users with non-users on strength, power and muscle growth. The honest answer is reassuring — and it changes how you should plan.",
    date: "2026-08-31",
    dateLabel: "August 31, 2026",
    readingTime: "8 min read",
    category: "The evidence",
    priority: 0.8,
  },
  {
    slug: "period-tracker-privacy",
    title: "Is Your Period Tracking Data Private? A 5-Minute Audit",
    excerpt:
      "Where your cycle data is stored decides who can ever get at it. Seven questions to ask any tracker, how to check each one yourself, and what the answers mean.",
    date: "2026-09-07",
    dateLabel: "September 7, 2026",
    readingTime: "7 min read",
    category: "Privacy",
    priority: 0.8,
  },
  {
    slug: "best-workout-tracker-for-women",
    title: "The Best Workout Tracker for Women in 2026: 6 Apps Compared",
    excerpt:
      "Strong, Hevy, Flo, Clue, Wild.AI, FitrWoman — we compared the most popular workout trackers and cycle apps, and found the gap every one of them leaves open.",
    date: "2026-07-05",
    dateLabel: "July 5, 2026",
    readingTime: "8 min read",
    category: "Comparison",
    priority: 0.8,
  },
  {
    slug: "cycle-syncing-workout-plan",
    title: "Cycle Syncing Workout Plan: How to Train in Every Phase (4-Week Template)",
    excerpt:
      "What to do in your menstrual, follicular, ovulatory and luteal phases — plus a 4-week strength template you can start this cycle.",
    date: "2026-07-05",
    dateLabel: "July 5, 2026",
    readingTime: "9 min read",
    category: "Training guide",
    priority: 0.8,
  },
  {
    slug: "lifting-on-your-period",
    title: "Lifting on Your Period: What Actually Helps (And What to Skip)",
    excerpt:
      "Yes, you can lift on your period. Here's how to adjust volume, intensity and expectations during your menstrual phase — without losing progress.",
    date: "2026-07-05",
    dateLabel: "July 5, 2026",
    readingTime: "6 min read",
    category: "Training guide",
    priority: 0.7,
  },
  {
    slug: "what-is-a-power-window",
    title: "What Is a Power Window? Your Cycle's Strongest Days, Explained",
    excerpt:
      "The stretch of your cycle when strength and power output tend to peak — the science, the one caution, and how to find yours.",
    date: "2026-07-05",
    dateLabel: "July 5, 2026",
    readingTime: "5 min read",
    category: "The science",
    priority: 0.7,
  },
];

/** UTC midnight of a "YYYY-MM-DD" date string. */
function timestamp(date: string): number {
  return Date.parse(`${date}T00:00:00Z`);
}

export function isPublished(post: Post, now: Date = new Date()): boolean {
  return timestamp(post.date) <= now.getTime();
}

/** Live posts, newest first. */
export function publishedPosts(now: Date = new Date()): Post[] {
  return POSTS.filter((p) => isPublished(p, now)).sort(
    (a, b) => timestamp(b.date) - timestamp(a.date),
  );
}

/** Scheduled-but-not-yet-live posts, soonest first. */
export function scheduledPosts(now: Date = new Date()): Post[] {
  return POSTS.filter((p) => !isPublished(p, now)).sort(
    (a, b) => timestamp(a.date) - timestamp(b.date),
  );
}

export function getPost(slug: string): Post {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown post slug: ${slug}`);
  return post;
}

export function getPosts(slugs: string[]): Post[] {
  return slugs.map(getPost);
}
