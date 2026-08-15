import type { Metadata } from "next";
import { Archivo_Black, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE = "https://cyclesyncedlifting.com";
// Keep in sync with the App Store listing (name + subtitle).
const APP_NAME = "Phase: Gym & Lifting for Women";
const TITLE = `${APP_NAME} — Cycle-Aware Workout Tracker`;
const DESCRIPTION =
  "Phase is the gym & lifting app for women — a real barbell tracker with plate math, RPE and e1RM that also knows your cycle. Push PRs in your power window, ease off through PMS. iPhone & Apple Watch.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s · Phase",
  },
  description: DESCRIPTION,
  applicationName: APP_NAME,
  keywords: [
    "gym app for women",
    "lifting app for women",
    "weightlifting app for women",
    "barbell tracker",
    "cycle synced workouts",
    "women's gym planner",
    "women workout tracker",
    "best workout tracker for women",
    "workout tracker for women",
    "workout log app",
    "cycle syncing",
    "cycle synced lifting",
    "menstrual cycle training",
    "strength training for women",
    "female fitness app",
    "period workout app",
    "PMS workout",
    "follicular phase training",
    "luteal phase workout",
    "hormone cycle workout",
    "exercise routine for women",
    "weight lifting app for women",
    "power window",
    "PR tracker",
    "e1RM",
    "Apple Watch strength tracker",
    "women's weightlifting app",
    "PCOS workout app",
    "PMDD training",
    "perimenopause strength training",
  ],
  authors: [{ name: "Cycle Synced Lifting" }],
  creator: "Cycle Synced Lifting",
  category: "health",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Phase — the gym & lifting app for women. iPhone & Apple Watch.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "coRc4gjqZRELPB70hFzpRfOFTM8iwLNkVniLm-tCap8",
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cycle Synced Lifting",
  url: SITE,
  logo: `${SITE}/icon.png`,
  description:
    "Maker of Phase: Gym & Lifting for Women — a barbell-first strength tracker for iPhone and Apple Watch that programs training around the menstrual cycle.",
};

const siteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: APP_NAME,
  alternateName: ["Phase", "Cycle Synced Lifting", "Phase: Cycle Synced Workouts"],
  url: SITE,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
        />
      </body>
    </html>
  );
}
