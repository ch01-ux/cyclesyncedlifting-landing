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
const DESCRIPTION =
  "Phase is the women's gym planner & workout tracker that syncs strength training to your menstrual cycle — push PRs when your hormones peak, ease off through PMS. For iPhone & Apple Watch.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Phase: Cycle Synced Workouts — Women's Gym Planner & Tracker",
    template: "%s · Phase",
  },
  description: DESCRIPTION,
  applicationName: "Phase: Cycle Synced Workouts",
  keywords: [
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
  ],
  authors: [{ name: "Cycle Synced Lifting" }],
  creator: "Cycle Synced Lifting",
  category: "health",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Phase: Cycle Synced Workouts",
    title: "Phase: Cycle Synced Workouts — Women's Gym Planner & Tracker",
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Phase — train with your cycle. iPhone & Apple Watch.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phase: Cycle Synced Workouts — Women's Gym Planner & Tracker",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
    "Maker of Phase: Cycle Synced Workouts — a women's gym planner & strength tracker for iPhone and Apple Watch that programs training around the menstrual cycle.",
};

const siteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Phase: Cycle Synced Workouts",
  alternateName: ["Phase", "Cycle Synced Lifting"],
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
