import Image from "next/image";

/* ------------------------------------------------------------------ config */
const SITE = "https://cyclesyncedlifting.com";
const APP_STORE_URL = "https://apps.apple.com/app/id0000000000"; // TODO: real App Store URL at launch
const EMAIL = "hello@cyclesyncedlifting.com";

const phases = [
  { name: "Menstrual", color: "var(--color-menstrual)" },
  { name: "Follicular", color: "var(--color-follicular)" },
  { name: "Power window", color: "var(--color-gold)" },
  { name: "Luteal", color: "var(--color-luteal)" },
];

const features = [
  {
    kicker: "Cycle-aware programming",
    title: "Your program bends to your cycle — automatically.",
    body: "Phase reads your cycle from Apple Health (or logs it in-app) and reshapes every week: build through your follicular phase, peak in your power window, ease volume in your luteal phase, and deload near your period. Stop blaming yourself for weeks that were never your fault.",
    img: "/shots/today-ovulatory.png",
    alt: "Phase Today screen showing a Power window day with today's session",
  },
  {
    kicker: "Power-window predictions",
    title: "See your next PR window weeks before it arrives.",
    body: "Onboarding ends with your next four weeks mapped to training intent — the exact days you're primed to push, and the days to hold back. It's the moment you realize your strength was never random.",
    img: "/shots/reveal-hero.png",
    alt: "Phase phase-plan reveal showing the next four weeks and the upcoming power window",
  },
  {
    kicker: "The signature chart",
    title: "Watch your strength rise and fall with your cycle.",
    body: "A phase-colored estimated-1RM chart nobody else shows you. The pattern jumps off the screen — most lifters find the majority of their PRs land inside their power window.",
    img: "/shots/progress.png",
    alt: "Phase progress chart with phase-colored strength data and a power-window PR badge",
  },
  {
    kicker: "A real strength tracker",
    title: "Plate math, rest timer, RPE, e1RM — the whole logger.",
    body: "Phase stands on its own against any lifting tracker: fast set logging, a plate calculator, a live rest timer, RPE, and automatic PR detection — with cycle-aware coaching layered on top.",
    img: "/shots/session-player.png",
    alt: "Phase in-session logging screen with weight, reps, RPE and a laxity-caution note",
  },
];

const shots = [
  { verb: "See", benefit: "your next PR window", img: "/shots/reveal-hero.png" },
  { verb: "Know", benefit: "why weeks feel off", img: "/shots/progress.png" },
  { verb: "Log", benefit: "every set & PR", img: "/shots/session-player.png" },
  { verb: "Map", benefit: "your whole cycle", img: "/shots/cycle.png" },
  { verb: "Train", benefit: "with today's phase", img: "/shots/today-ovulatory.png" },
  { verb: "Celebrate", benefit: "power-window PRs", img: "/shots/pr-card-lift.png" },
];

const faqs = [
  {
    q: "What is cycle-synced lifting?",
    a: "It's strength training that adapts to the phases of your menstrual cycle. Estrogen peaks in the late-follicular and ovulatory phases are linked with higher power output; the luteal phase often brings lower recovery. Phase programs around that — pushing intensity when you're primed and easing off when you're not.",
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
          Coming soon
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
    name: "Phase — Cycle-Synced Lifting",
    operatingSystem: "iOS, watchOS",
    applicationCategory: "HealthApplication",
    url: SITE,
    description:
      "The strength tracker that programs around your menstrual cycle — for iPhone & Apple Watch.",
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
            <Kicker>Cycle-synced strength training</Kicker>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Your strength isn&apos;t random.
              <span className="block text-gold">It moves with your cycle.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Phase is the strength tracker that programs around your menstrual
              cycle — push PRs when your hormones peak, auto-deload when they
              don&apos;t, and finally understand your &ldquo;off&rdquo; weeks.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreButton />
              <a
                href={`mailto:${EMAIL}?subject=Notify%20me%20when%20Phase%20launches`}
                className="font-mono text-sm font-bold uppercase tracking-widest text-ink underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark"
              >
                Get launch updates →
              </a>
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted">
              iPhone &amp; Apple Watch · Private by design
            </p>
          </div>

          <div className="mx-auto w-[64%] max-w-[300px] md:w-full">
            <Phone
              src="/shots/reveal-hero.png"
              alt="Phase showing your next power window and a four-week phase plan"
              priority
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- problem */}
      <section className="border-y border-ink/5 bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
          <p className="font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Most training plans treat every week the same.
            <span className="text-gold"> Your body doesn&apos;t.</span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">
            Strength and recovery shift across your cycle. Period apps predict
            bleeding but don&apos;t train you; lifting apps program in a straight
            line as if every week is identical. Phase is the app that lives in
            between — a rigorous tracker that finally accounts for your hormones.
          </p>
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
            Train with your body,
            <span className="block">not against it.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
            Cycle-synced programming, the phase chart, a real tracker, and your
            Apple Watch — all in one app.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={APP_STORE_URL}
              className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-base font-semibold text-paper shadow-lg transition hover:-translate-y-0.5"
            >
              Download on the App Store
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Notify%20me%20when%20Phase%20launches`}
              className="font-mono text-sm font-bold uppercase tracking-widest text-ink underline decoration-2 underline-offset-4"
            >
              Get launch updates →
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
                The workout tracker for women who lift — strength programming that
                follows your cycle. For iPhone &amp; Apple Watch.
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
