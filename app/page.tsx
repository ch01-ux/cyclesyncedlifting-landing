import Image from "next/image";

/* ------------------------------------------------------------------ config */
const SITE = "https://cyclesyncedlifting.com";
const APP_STORE_URL = "https://apps.apple.com/us/app/phase-gym-lifting-for-women/id6785094654";
const EMAIL = "hello@cyclesyncedlifting.com";

const phases = [
  { name: "Menstrual", color: "var(--color-menstrual)" },
  { name: "Follicular", color: "var(--color-follicular)" },
  { name: "Power window", color: "var(--color-gold)" },
  { name: "Luteal", color: "var(--color-luteal)" },
];

const features = [
  {
    kicker: "First, a real tracker",
    title: "It logs a barbell session properly. That part is non-negotiable.",
    body: "Back Squat 210 × 6 at RPE 8, logged in two taps. Plate math, a live rest timer, previous-session numbers next to today's, automatic PR detection, and an 80-movement library. If Phase couldn't stand next to Hevy or Strong on the gym floor, the rest of this page wouldn't matter.",
    img: "/shots/session-player.png",
    alt: "Phase in-session logging screen showing Back Squat 210 lb x 6 with RPE selectors",
  },
  {
    kicker: "Then it explains the bad week",
    title: "Your strength moves in a pattern. Here it is, in your own numbers.",
    body: "A phase-colored estimated-1RM chart no other app shows you. Every session you log lands on it in your cycle's colours, so a dip stops being a mystery number and becomes a week you can place. Give it a few cycles and the shape of your month is right there — which dips were physiology, and which were just a bad night's sleep.",
    img: "/shots/progress.png",
    alt: "Phase progress chart with phase-colored strength data and a power-window PR badge",
  },
  {
    kicker: "So you stop losing the week",
    title: "The deload gets planned instead of discovered mid-set.",
    body: "Phase reads your cycle from Apple Health and reshapes the week ahead: build through your follicular phase, push in your power window, cap RPE and add rest through your luteal phase. You walk in knowing what today is for — instead of finding out under the bar.",
    img: "/shots/today-ovulatory.png",
    alt: "Phase Today screen showing a Power window day with today's session",
  },
  {
    kicker: "And you can see it coming",
    title: "Your next PR window, four weeks out.",
    body: "Onboarding ends with your next four weeks mapped to training intent — the days you're primed to push, and the days to hold back. Plan the heavy attempt around your life instead of hoping the day feels good.",
    img: "/shots/reveal-hero.png",
    alt: "Phase phase-plan reveal showing the next four weeks and the upcoming power window",
  },
];

const forYou = [
  {
    title: "You already lift",
    body: "Barbells, 3–5 days a week, a year or more in. You have a program and you follow it. Phase is a logger first — not a class app, not a workout generator.",
  },
  {
    title: "Your cycle actually costs you",
    body: "Heavy or painful periods, PMS that flattens you, PCOS, PMDD, endo — or just one week a month where everything is heavier and no app has ever accounted for it.",
  },
  {
    title: "You're already tracking both",
    body: "A lifting app in one pocket, a period app in the other, and nothing connecting them. Phase reads your cycle from Apple Health so you keep logging periods wherever you already do.",
  },
];

const shots = [
  { verb: "See", benefit: "your strength isn't random", img: "/shots/progress.png" },
  { verb: "Track", benefit: "like a lifter", img: "/shots/session-player.png" },
  { verb: "Train", benefit: "barbells, not classes", img: "/shots/train.png" },
  { verb: "Plan", benefit: "around your power window", img: "/shots/cycle.png" },
  { verb: "Leave", benefit: "your phone in the bag", img: "/shots/today-ovulatory.png" },
  { verb: "Share", benefit: "every hard-won PR", img: "/shots/pr-card-lift.png" },
];

const faqs = [
  {
    q: "Is cycle-synced training actually backed by science?",
    a: "It's an active area of research, and we'd rather be straight with you than oversell it. Some studies find higher strength in the follicular phase, some find the opposite, and plenty find no difference at all — the honest summary is that the group-average effect is small and still debated. What isn't debated is how much this varies between individuals: two women with the same cycle length can have completely different weeks. That's exactly why Phase doesn't just hand you a generic 28-day template. It logs your sessions and symptoms, learns from your own RPE, and shows you your own pattern — and if your strength turns out not to track your cycle, the chart will show you that too.",
  },
  {
    q: "I already use Hevy / Strong. Why switch?",
    a: "Because they can't see half of what's driving your training. Phase does the same job — sets, reps, RPE, plate math, rest timer, PR detection, e1RM trends — and adds the layer they're missing. Two honest caveats. There's no way to import your training history yet, so you'll start fresh from your current working weights (your cycle does import from Apple Health). And the pattern takes real time to emerge: your chart is phase-coloured from the first few sessions, but Phase won't tell you something like \"your squat averages 7% higher in your follicular phase\" until it has around eight sessions of that lift in each phase — usually three to four months of consistent logging.",
  },
  {
    q: "Does Phase replace my period tracker?",
    a: "No. Phase reads your cycle from Apple Health, so you keep logging periods wherever you already do. If you don't use Apple Health, you can log your cycle directly in Phase instead.",
  },
  {
    q: "Is my cycle data private?",
    a: "Completely. Everything lives on your iPhone and in your own private iCloud. There are no accounts, no ads, and no analytics — we don't have a server that could ever leak your data.",
  },
  {
    q: "Does it work with irregular cycles or PCOS?",
    a: "Phase learns from the cycles you log and widens its estimates when your cycle is variable. On hormonal birth control, it switches to honest, standard progression instead of faking phases.",
  },
  {
    q: "Should I still lift during PMS or my luteal phase?",
    a: "Yes — but smarter, not harder. In the luteal phase recovery often dips and PMS can sap drive, so Phase automatically shifts your routine toward moderate volume and technique work instead of max-effort lifts. You keep training and logging; the app just stops asking for PRs when your hormones aren't there.",
  },
  {
    q: "Do I need an Apple Watch?",
    a: "No — Phase is a full iPhone app. But if you have an Apple Watch, you can start a session, log every set, and run your rest timer from your wrist, all in sync with your phone.",
  },
  {
    q: "Is Phase medical advice?",
    a: "No. Phase provides general training education, not medical advice. Cycle estimates are for planning your training only — never for contraception or family planning.",
  },
];

/* ------------------------------------------------------------------ ui bits */
function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-gold-dark">
      {children}
    </p>
  );
}

function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-paper shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:shadow-xl ${className}`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.365 1.43c0 1.14-.42 2.2-1.26 3.06-.9.9-2.02 1.44-3.06 1.36-.13-1.09.42-2.24 1.2-3.05.84-.86 2.14-1.5 3.12-1.37zM20.7 17.2c-.56 1.29-.83 1.86-1.55 3-1 1.55-2.42 3.48-4.18 3.5-1.56.01-1.96-1.02-4.08-1.01-2.12.01-2.56 1.03-4.12 1.02-1.76-.02-3.1-1.76-4.1-3.31C-.4 15.9-.72 10.66 1.06 7.9c1.06-1.66 2.72-2.63 4.28-2.63 1.6 0 2.6 1.03 3.92 1.03 1.28 0 2.06-1.03 3.92-1.03 1.4 0 2.88.76 3.94 2.08-3.46 1.9-2.9 6.84.58 7.85z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[0.65rem] font-mono uppercase tracking-widest text-paper/70">
          Now available
        </span>
        <span className="block text-base font-semibold">Download on the App Store</span>
      </span>
    </a>
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-2xl tracking-tight ${className}`}>
      Phase<span className="text-gold">.</span>
    </span>
  );
}

function Phone({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative rounded-[2.2rem] bg-ink p-2 shadow-2xl shadow-ink/25 ring-1 ring-ink/10">
      <Image
        src={src}
        alt={alt}
        width={1320}
        height={2868}
        priority={priority}
        className="rounded-[1.7rem] w-full h-auto"
        sizes="(max-width: 768px) 70vw, 320px"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ page */
export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const appLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Phase: Gym & Lifting for Women",
    alternateName: "Phase",
    operatingSystem: "iOS, watchOS",
    applicationCategory: "HealthApplication",
    applicationSubCategory: "Sports",
    url: SITE,
    installUrl: APP_STORE_URL,
    downloadUrl: APP_STORE_URL,
    description:
      "The gym & lifting app for women — a real barbell tracker with plate math, RPE and e1RM that also programs around your menstrual cycle. For iPhone & Apple Watch.",
    offers: { "@type": "Offer", category: "subscription" },
  };

  return (
    <>
      {/* ---------------------------------------------------------- nav */}
      <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" aria-label="Phase home">
            <Wordmark />
          </a>
          <div className="hidden items-center gap-8 font-mono text-xs font-bold uppercase tracking-widest text-ink/70 md:flex">
            <a href="#features" className="hover:text-ink">Features</a>
            <a href="#watch" className="hover:text-ink">Apple Watch</a>
            <a href="#privacy" className="hover:text-ink">Privacy</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
            <a href="/blog" className="hover:text-ink">Blog</a>
          </div>
          <a
            href={APP_STORE_URL}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:opacity-90"
          >
            Get the app
          </a>
        </nav>
      </header>

      {/* ---------------------------------------------------------- hero */}
      <section id="top" className="relative overflow-hidden bg-dots">
        <div className="glow pointer-events-none absolute left-1/2 top-40 h-[720px] w-[720px] -translate-x-1/2" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-14 md:grid-cols-2 md:pb-28 md:pt-24">
          <div>
            <Kicker>The gym app for women who lift</Kicker>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Your strength isn&apos;t random.
              <span className="block text-gold">It moves with your cycle.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Phase is a real barbell tracker — sets, reps, RPE, plate math, e1RM
              trends — built for women. It just happens to know why some weeks
              feel heavier, so you can push PRs in your power window and stop
              reading a rough week as failure.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreButton />
              <a
                href={`mailto:${EMAIL}?subject=Question%20about%20Phase`}
                className="font-mono text-sm font-bold uppercase tracking-widest text-ink underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark"
              >
                Questions? Get in touch →
              </a>
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted">
              iPhone &amp; Apple Watch · Private by design
            </p>
          </div>

          <div className="mx-auto w-full max-w-[460px] md:max-w-none">
            <Image
              src="/shots/hero-athlete.png"
              alt="Phase on iPhone and Apple Watch — cycle-synced strength training"
              width={1350}
              height={2400}
              priority
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- problem */}
      <section className="border-y border-ink/5 bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
          <p className="font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
            You hit 225 last month. Today 185 moves like a truck.
            <span className="text-gold"> Your log just shows a red arrow.</span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">
            Every lifting app on your phone is built to show a line going up. So
            the week you were bleeding, sleeping badly, and still made it to the
            gym gets recorded as a failure — and three months of that is how good
            lifters quit good programs. Phase logs the same week and tells you
            what it actually was.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- who it's for */}
      <section className="mx-auto max-w-6xl px-5 pt-16 md:pt-24">
        <div className="text-center">
          <Kicker>Who Phase is built for</Kicker>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
            If all three sound like you, this app was made for you.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {forYou.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-ink/10 bg-white/60 p-7"
            >
              <h3 className="font-display text-xl leading-snug tracking-tight text-ink">
                {f.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- features */}
      <section id="features" className="mx-auto max-w-6xl px-5 py-16 md:py-28">
        <div className="space-y-20 md:space-y-32">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <Kicker>{f.kicker}</Kicker>
                <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                  {f.title}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                  {f.body}
                </p>
              </div>
              <div
                className={`mx-auto w-[62%] max-w-[280px] md:w-full md:max-w-[320px] ${
                  i % 2 === 1 ? "md:order-1 md:ml-0" : "md:ml-auto"
                }`}
              >
                <Phone src={f.img} alt={f.alt} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- watch / ecosystem */}
      <section id="watch" className="border-y border-ink/5 bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:py-24">
          <Kicker>iPhone &amp; Apple Watch</Kicker>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            Start, log, and rest — from your wrist.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Drive a whole session from your Apple Watch — set logging, RPE, and a
            gold rest-timer ring — perfectly in sync with your phone.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              { img: "/shots/eco-today.png", alt: "Phase Today on iPhone and Apple Watch" },
              { img: "/shots/eco-logging.png", alt: "Logging a session on iPhone and Apple Watch" },
            ].map((e) => (
              <div
                key={e.img}
                className="overflow-hidden rounded-3xl bg-paper shadow-xl shadow-ink/10 ring-1 ring-ink/10"
              >
                <Image
                  src={e.img}
                  alt={e.alt}
                  width={1230}
                  height={1532}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 100vw, 500px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- video */}
      <section className="mx-auto max-w-6xl px-5 py-16 text-center md:py-24">
        <Kicker>See it in action</Kicker>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
          Thirty seconds, wrist to barbell.
        </h2>
        <div className="mx-auto mt-10 w-[70%] max-w-[320px]">
          <div className="overflow-hidden rounded-[2.2rem] bg-ink p-2 shadow-2xl shadow-ink/25">
            <video
              className="w-full rounded-[1.7rem]"
              controls
              playsInline
              preload="none"
              poster="/preview-poster.jpg"
            >
              <source src="/preview.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- gallery */}
      <section className="border-t border-ink/5 bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-gold">
              Every screen, one story
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight tracking-tight text-paper sm:text-4xl">
              Built to make you strong on your own schedule.
            </h2>
          </div>
          <div className="mt-12 flex snap-x gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
            {shots.map((s) => (
              <figure key={s.img} className="w-[62%] shrink-0 snap-center md:w-auto">
                <div className="overflow-hidden rounded-[1.8rem] ring-1 ring-paper/15">
                  <Image
                    src={s.img}
                    alt={`${s.verb} ${s.benefit}`}
                    width={1320}
                    height={2868}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 62vw, 340px"
                  />
                </div>
                <figcaption className="mt-4 text-center">
                  <span className="font-display text-lg text-gold">{s.verb} </span>
                  <span className="font-mono text-sm uppercase tracking-wider text-paper/70">
                    {s.benefit}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- privacy */}
      <section id="privacy" className="mx-auto max-w-5xl px-5 py-16 md:py-28">
        <div className="text-center">
          <Kicker>Private by design</Kicker>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            Your cycle data never leaves your device.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Cycle and training data stay on your iPhone and in your own private
            iCloud. No accounts, no ads, no analytics — we don&apos;t have a
            server that could ever leak it.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { t: "On-device only", d: "Your data lives on your iPhone and your private iCloud — never on our servers." },
            { t: "No accounts, no ads", d: "No sign-up, no tracking, no third parties. Nothing to harvest." },
            { t: "HealthKit-first", d: "Cycle data read from Apple Health stays inside Apple's private stack." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl bg-paper-2 p-6 ring-1 ring-ink/5">
              <h3 className="font-display text-lg text-ink">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {phases.map((p) => (
            <span
              key={p.name}
              className="inline-flex items-center gap-2 rounded-full bg-paper-2 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink/70"
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
              {p.name}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- faq */}
      <section id="faq" className="border-t border-ink/5 bg-paper-2">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <div className="text-center">
            <Kicker>Questions</Kicker>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Good to know.
            </h2>
          </div>
          <div className="mt-10 divide-y divide-ink/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink">
                  {f.q}
                  <span className="font-mono text-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- final cta */}
      <section className="bg-gold">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Stop losing a week
            <span className="block">every month.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
            Keep the log you&apos;d keep anyway. Get back the four weeks a year
            you spend wondering what went wrong.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={APP_STORE_URL}
              className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-base font-semibold text-paper shadow-lg transition hover:-translate-y-0.5"
            >
              Download on the App Store
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Question%20about%20Phase`}
              className="font-mono text-sm font-bold uppercase tracking-widest text-ink underline decoration-2 underline-offset-4"
            >
              Questions? Get in touch →
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- footer */}
      <footer className="bg-ink text-paper/70">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="max-w-xs">
              <Wordmark className="text-paper" />
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-paper/50">
                Cycle-Synced Lifting
              </p>
              <p className="mt-4 text-sm leading-relaxed text-paper/60">
                The gym &amp; lifting app for women — a real barbell tracker that
                also knows your cycle. For iPhone &amp; Apple Watch.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 font-mono text-sm">
              <div>
                <p className="text-xs uppercase tracking-widest text-paper/40">App</p>
                <ul className="mt-3 space-y-2">
                  <li><a href="#features" className="hover:text-gold">Features</a></li>
                  <li><a href="#watch" className="hover:text-gold">Apple Watch</a></li>
                  <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
                  <li><a href={APP_STORE_URL} className="hover:text-gold">App Store</a></li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-paper/40">Company</p>
                <ul className="mt-3 space-y-2">
                  <li><a href="/blog" className="hover:text-gold">Blog</a></li>
                  <li><a href="/support" className="hover:text-gold">Support</a></li>
                  <li><a href="/privacy" className="hover:text-gold">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-gold">Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/40 sm:flex-row">
            <p>© {new Date().getFullYear()} Cycle Synced Lifting. All rights reserved.</p>
            <p>
              Training education, not medical advice. Cycle estimates are for
              training planning only.
            </p>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
