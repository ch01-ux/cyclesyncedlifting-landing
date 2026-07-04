import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Phase handles your data. Cycle and training data stay on your device and in your private iCloud — no accounts, no ads, no analytics, no servers.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <LegalShell title="Privacy Policy" updated="July 5, 2026">
      <p>
        Phase (&ldquo;Phase,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) is a
        strength-training app that adapts your program to your menstrual cycle.
        We built Phase to be private by design. This policy explains what data
        the app handles and how.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>
          Your cycle, training, and check-in data stay <strong>on your device</strong>{" "}
          and in <strong>your own private iCloud</strong> (Apple&apos;s CloudKit
          private database).
        </li>
        <li>
          <strong>We cannot see your data.</strong> It is never sent to
          Phase&apos;s servers — we don&apos;t operate any servers that receive it.
        </li>
        <li>
          <strong>No tracking, no analytics, no ads, no third parties.</strong> We
          do not sell or share your data with anyone.
        </li>
      </ul>

      <h2>What data Phase processes</h2>
      <p>
        All of the following is created by you and stored only on your device and
        in your private iCloud account:
      </p>
      <ul>
        <li><strong>Cycle data</strong> — period start dates and lengths, cycle settings.</li>
        <li><strong>Training data</strong> — workouts, sets, weights, reps, RPE, personal records.</li>
        <li><strong>Daily check-ins</strong> — energy, soreness, and sleep ratings.</li>
        <li><strong>Preferences</strong> — units, program choices, notification settings.</li>
      </ul>
      <p>Phase does not require an account, email, or sign-in.</p>

      <h2>Apple Health (HealthKit)</h2>
      <p>If you choose to connect Apple Health, Phase can:</p>
      <ul>
        <li><strong>Read</strong> menstrual/cycle data to estimate your phase and plan training, and</li>
        <li><strong>Write</strong> periods you log in Phase back to Health — only if you turn that on.</li>
      </ul>
      <p>
        Health data accessed through HealthKit is used solely to provide app
        features on your device. It is <strong>never</strong> used for advertising
        or marketing, and it is never shared with third parties. You can revoke
        access anytime in <strong>Settings → Health → Data Access &amp; Devices</strong>.
      </p>

      <h2>Purchases</h2>
      <p>
        Phase offers an optional subscription (Phase Pro). Purchases are processed
        by <strong>Apple</strong>; we do not receive or store your payment
        information.
      </p>

      <h2>Notifications</h2>
      <p>
        Phase uses <strong>local notifications only</strong> (e.g. power-window and
        period reminders). These are scheduled on your device.
      </p>

      <h2>iCloud sync</h2>
      <p>
        If iCloud is enabled, your data syncs across your devices through your
        private CloudKit database, secured by your Apple Account. Apple processes
        this data under Apple&apos;s privacy terms; Phase has no access to it.
      </p>

      <h2>Data retention and deletion</h2>
      <p>You are in control of your data:</p>
      <ul>
        <li>
          <strong>Delete in-app:</strong> Settings → Delete all data removes your
          cycle history, workouts, and PRs from the device and your private iCloud.
        </li>
        <li>
          <strong>Delete the app:</strong> removing Phase deletes its on-device
          data; you can remove its iCloud data from your Apple Account storage
          settings.
        </li>
      </ul>

      <h2>Children</h2>
      <p>
        Phase is not directed to children under 13 and does not knowingly collect
        data from them.
      </p>

      <h2>Medical disclaimer</h2>
      <p>
        Phase provides general training education based on published research about
        menstrual cycles and exercise. It is <strong>not medical advice</strong>,
        and ovulation estimates are for <strong>training planning only — never for
        family planning or contraception</strong>. Consult a healthcare provider
        for medical concerns.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy; material changes will be reflected by a new
        effective date here.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:hello@cyclesyncedlifting.com">hello@cyclesyncedlifting.com</a>.
      </p>
    </LegalShell>
  );
}
