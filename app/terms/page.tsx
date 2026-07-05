import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of the Phase app, including the Phase Pro subscription and the training-education (not medical advice) disclaimer.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <LegalShell title="Terms of Use" updated="July 5, 2026">
      <p>
        These Terms govern your use of the Phase app. By using Phase, you agree to
        them.
      </p>

      <h2>1. License</h2>
      <p>
        Phase grants you a personal, non-transferable, non-exclusive license to use
        the app on Apple devices you own or control, subject to the Apple Media
        Services Terms and these Terms.
      </p>

      <h2>2. Subscriptions (Phase Pro)</h2>
      <p>Phase Pro is an <strong>auto-renewable subscription</strong> offered in annual and monthly options.</p>
      <ul>
        <li>Payment is charged to your <strong>Apple Account</strong> at confirmation of purchase.</li>
        <li>
          Your subscription <strong>renews automatically</strong> unless turned off
          at least <strong>24 hours</strong> before the end of the current period.
          Your Apple Account is charged for renewal within 24 hours before the
          period ends.
        </li>
        <li><strong>Manage or cancel</strong> anytime in your Apple Account settings.</li>
        <li>If a <strong>free trial</strong> is offered, any unused portion is forfeited when you purchase a subscription.</li>
        <li>Prices are shown in the app and may vary by region; we may change prices for future periods with notice as required.</li>
      </ul>
      <p>Apple handles all billing. Refunds are governed by Apple&apos;s policies.</p>

      <h2>3. Medical disclaimer</h2>
      <p>
        Phase provides <strong>general training education</strong>{" "}based on
        published research about menstrual cycles and exercise. Cycle responses
        vary widely between individuals — Phase&apos;s phase and ovulation estimates
        are <strong>for training planning only</strong>, are <strong>not medical
        advice</strong>, and must <strong>never</strong> be used for family planning
        or contraception. Always consult a qualified healthcare provider for medical
        concerns, and a qualified professional before beginning any exercise program.
      </p>

      <h2>4. Acceptable use</h2>
      <p>
        You agree not to misuse the app, reverse engineer it except as permitted by
        law, or use it in a way that violates applicable law.
      </p>

      <h2>5. No warranty</h2>
      <p>
        The app is provided &ldquo;as is&rdquo; without warranties of any kind, to
        the maximum extent permitted by law.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Phase is not liable for any
        indirect, incidental, or consequential damages arising from your use of the
        app, including any injury related to exercise.
      </p>

      <h2>7. Termination</h2>
      <p>
        These Terms apply until terminated. Your license ends if you stop using or
        delete the app, or if you breach these Terms.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update these Terms; material changes are reflected by a new effective
        date.
      </p>

      <h2>9. Contact</h2>
      <p>
        Email{" "}
        <a href="mailto:support@cyclesyncedlifting.com">support@cyclesyncedlifting.com</a>{" "}
        or visit our <a href="/support">Support page</a>.
      </p>
    </LegalShell>
  );
}
