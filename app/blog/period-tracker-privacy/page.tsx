import type { Metadata } from "next";
import Link from "next/link";
import PostShell, { Answer, PostLink, type Faq, type Source } from "@/components/PostShell";

export const revalidate = 3600;

const TITLE = "Is Your Period Tracking Data Private? A 5-Minute Audit";
const DESCRIPTION =
  "Where your cycle data is stored decides who can ever get at it. Seven questions to ask any period or fitness tracker, how to check each one yourself in about five minutes, and what the answers actually mean.";

export const metadata: Metadata = {
  title: "Is Your Period Tracking Data Private? A 5-Minute Audit",
  description: DESCRIPTION,
  alternates: { canonical: "/blog/period-tracker-privacy" },
  openGraph: {
    type: "article",
    url: "https://cyclesyncedlifting.com/blog/period-tracker-privacy",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const faqs: Faq[] = [
  {
    q: "Are period tracking apps safe to use?",
    a: "It depends entirely on where the data is stored. An app that keeps cycle data on your device and in your own private iCloud cannot hand over what it never received. An app that stores it on company servers holds a copy that can be shared, sold, breached or subpoenaed — which is why the storage model is the first thing to check.",
  },
  {
    q: "How do I tell whether a period app sends my data anywhere?",
    a: "Check three things in about five minutes: the App Store privacy label (does it say Data Not Collected, or list Health & Fitness under data linked to you?), whether the app forces you to create an account (an account implies a server), and whether the privacy policy names third parties, analytics providers or advertising partners.",
  },
  {
    q: "Has any period tracking app actually been caught sharing health data?",
    a: "Yes. In 2021 the US Federal Trade Commission settled with Flo Health over allegations it shared users' health data with third parties including Facebook and Google despite privacy promises, and in 2023 the FTC settled with the maker of the Premom app over similar allegations, including a $100,000 civil penalty. Both are public enforcement records.",
  },
  {
    q: "Is data in Apple Health private?",
    a: "Health app data is encrypted on device and, when iCloud sync is on, in transit and on Apple's servers. Apps can only read categories you explicitly grant, and you can revoke access per category at any time in Settings → Privacy & Security → Health. Granting an app access does mean that app can then do what it likes with what it reads — which is why the app's own storage model still matters.",
  },
  {
    q: "Does Phase store my cycle data on its servers?",
    a: "Phase has no servers. Cycle, training and check-in data stays on your device and syncs only through your own private iCloud, there are no accounts to create, no analytics SDKs and no ads. The App Store privacy label is Data Not Collected.",
  },
];

const sources: Source[] = [
  {
    label:
      "FTC (2021). Developer of Popular Women's Fertility-Tracking App Settles FTC Allegations that It Misled Consumers About the Disclosure of their Health Data.",
    url: "https://www.ftc.gov/news-events/news/press-releases/2021/01/developer-popular-womens-fertility-tracking-app-settles-ftc-allegations-it-misled-consumers-about",
  },
  {
    label:
      "FTC (2021). FTC Finalizes Order with Flo Health, a Fertility-Tracking App that Shared Sensitive Health Data with Facebook, Google, and Others.",
    url: "https://www.ftc.gov/news-events/news/press-releases/2021/06/ftc-finalizes-order-flo-health-fertility-tracking-app-shared-sensitive-health-data-facebook-google",
  },
  {
    label:
      "FTC (2024). Health Breach Notification Rule — final rule extending breach notification duties to health apps.",
    url: "https://www.ftc.gov/legal-library/browse/rules/health-breach-notification-rule",
  },
];

export default function Post() {
  return (
    <PostShell
      title={TITLE}
      description={DESCRIPTION}
      slug="period-tracker-privacy"
      faqs={faqs}
      sources={sources}
      related={[
        "best-workout-tracker-for-women",
        "does-cycle-syncing-actually-work",
        "cycle-syncing-workout-plan",
      ]}
    >
      <Answer>
        <p>
          <strong>It depends on one thing: where the data lives.</strong> If an app
          stores your cycle on its own servers, it holds a copy that can be
          shared, sold, breached or subpoenaed. If it keeps everything on your
          device and in your private iCloud, it cannot hand over what it never
          received. Everything else in a privacy policy is secondary to that.
        </p>
      </Answer>

      <p>
        Cycle data is unusually sensitive — it can imply pregnancy, pregnancy
        loss, fertility treatment, health conditions and sexual activity. It is
        also unusually casual to hand over: most people tap through an onboarding
        flow in under a minute without ever learning where the data ends up.
      </p>
      <p>
        This is a five-minute audit you can run on any tracker, including ours.
        No legal expertise needed.
      </p>

      <h2>First, understand the three storage models</h2>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>How to spot it</th>
              <th>Who can access your data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Server-stored</strong>
              </td>
              <td>
                Requires an account (email, Google, Apple sign-in); works on a
                new phone after logging in; has a web version
              </td>
              <td>
                The company, its staff, its processors and analytics vendors,
                anyone who breaches it, and anyone with a valid legal demand
              </td>
            </tr>
            <tr>
              <td>
                <strong>Device-only</strong>
              </td>
              <td>
                No account; data disappears if you delete the app without a
                backup
              </td>
              <td>Only you — but you carry the backup risk yourself</td>
            </tr>
            <tr>
              <td>
                <strong>Device + your own private cloud</strong>
              </td>
              <td>
                No account, but syncs across your devices using your iCloud
                account
              </td>
              <td>
                Only you. The developer never receives a copy; the cloud is your
                account, not theirs
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Most large period trackers are server-stored, because that model supports
        accounts, web apps, cross-platform sync and — for some — advertising.
        None of that is inherently sinister. It just means a copy exists outside
        your control, and copies are what get shared.
      </p>

      <h2>That risk is not hypothetical</h2>
      <p>
        Two public enforcement records make the point better than any argument:
      </p>
      <ul>
        <li>
          In <strong>January 2021</strong> the US Federal Trade Commission announced a
          settlement with <strong>Flo Health</strong> over allegations that it shared
          users’ health data with third parties including Facebook and Google
          despite promising to keep it private. The order was finalised in June
          2021 and required affirmative consent before sharing health data, an
          independent privacy review, and notification of affected users.
        </li>
        <li>
          In <strong>May 2023</strong> the FTC settled with <strong>Easy Healthcare</strong>,
          maker of the <strong>Premom</strong> app, over allegations it shared users’
          health information with third parties through software development
          kits — including a <strong>$100,000 civil penalty</strong> and a permanent ban
          on sharing personal health data for advertising.
        </li>
      </ul>
      <p>
        In both cases the data left because the data was there to leave. That is
        the whole argument for caring about the storage model rather than the
        promises.
      </p>

      <h2>The seven questions — and how to check each one</h2>

      <h3>1. Does it force me to create an account?</h3>
      <p>
        An account almost always implies a server, and a server implies a copy.
        Check by installing and looking at the first screen: is there a
        &quot;continue without an account&quot; path?
      </p>

      <h3>2. What does the App Store privacy label say?</h3>
      <p>
        Scroll to <strong>App Privacy</strong> on the App Store listing. &quot;Data Not
        Collected&quot; is the strongest possible answer. If you see{" "}
        <em>Health &amp; Fitness</em> or <em>Sensitive Info</em> under &quot;Data Linked
        to You,&quot; the developer is telling Apple it receives that data tied to
        your identity.
      </p>

      <h3>3. Does the privacy policy name third parties?</h3>
      <p>
        Search the policy for <em>third part</em>, <em>partner</em>, <em>analytics</em>,{" "}
        <em>advertis</em> and <em>affiliate</em>. Vague phrasing like &quot;we may share
        with trusted partners to improve our services&quot; is doing a lot of
        quiet work.
      </p>

      <h3>4. Is there advertising anywhere in the app?</h3>
      <p>
        Ads generally require an advertising SDK, and advertising SDKs are how
        health data has historically leaked. A subscription-funded app has no
        structural reason to carry one.
      </p>

      <h3>5. Can I export and delete everything?</h3>
      <p>
        Look for a data export (CSV or similar) and a genuine &quot;delete all my
        data&quot; control in settings — not just &quot;delete account,&quot;
        which sometimes means deactivation. Export also means you are not locked
        in.
      </p>

      <h3>6. What happens if the company is acquired or shuts down?</h3>
      <p>
        Search the policy for <em>merger</em> or <em>acquisition</em>. Almost every
        server-stored app lists user data as an asset that transfers with the
        business. Worth knowing before you log five years of cycles.
      </p>

      <h3>7. What is the minimum it needs to know?</h3>
      <p>
        A tracker that reads your cycle from Apple Health does not need your
        email, your location, your contacts or your name. Every extra field is
        extra exposure for no functional gain.
      </p>

      <h2>Where Apple Health fits</h2>
      <p>
        Apple Health data is encrypted on device and — when iCloud sync is on —
        in transit and on Apple’s servers. Apps only see the categories you
        explicitly grant, and you can revoke any of them at any time in{" "}
        <strong>Settings → Privacy &amp; Security → Health</strong>.
      </p>
      <p>
        One honest caveat: granting an app read access to your menstrual data
        means that app can then do whatever its own policy permits with what it
        reads. Apple’s guarantees cover Apple’s storage, not the app’s. So the
        storage-model question survives even for a HealthKit-based app — which is
        exactly why it is question one.
      </p>

      <h2>Where Phase stands</h2>
      <p>
        We would rather be checkable than reassuring, so here are the specifics
        you can verify yourself:
      </p>
      <ul>
        <li>
          <strong>No servers.</strong> There is no Phase backend. There is nowhere
          for your data to be sent, because nothing was built to receive it.
        </li>
        <li>
          <strong>No accounts.</strong> You never give us an email address. Sync
          happens through your own private iCloud, using your Apple account, not
          ours.
        </li>
        <li>
          <strong>No analytics or advertising SDKs.</strong> The only network
          traffic is Apple’s own StoreKit for the subscription.
        </li>
        <li>
          <strong>App Store label: Data Not Collected.</strong> That is the claim we
          filed with Apple, and it is the one you should hold us to.
        </li>
        <li>
          <strong>Export and delete built in</strong> — CSV export and a delete-all
          control in Settings.
        </li>
        <li>
          Full detail in our <Link href="/privacy">privacy policy</Link>.
        </li>
      </ul>
      <p>
        This is also why Phase reads from Apple Health rather than asking you to
        keep a second period log: the fewer places your cycle exists, the fewer
        places it can go. If you are comparing options, the{" "}
        <PostLink slug="best-workout-tracker-for-women">
          workout tracker comparison
        </PostLink>{" "}
        covers the feature side of the same decision.
      </p>
      <p>
        <em>
          This article is general information about app privacy practices, not
          legal advice. Enforcement records referenced above are public FTC
          announcements; settlements are not findings of liability.
        </em>
      </p>
    </PostShell>
  );
}
