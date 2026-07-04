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
  "Phase is the strength tracker that programs around your menstrual cycle — push PRs when your hormones peak, auto-deload when they don't, and stop blaming yourself for weak weeks. Cycle-synced lifting for iPhone & Apple Watch.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Phase — Cycle-Synced Lifting | Strength training for your cycle",
    template: "%s · Phase",
  },
  description: DESCRIPTION,
  applicationName: "Phase",
  keywords: [
    "cycle syncing",
    "cycle synced lifting",
    "menstrual cycle training",
    "strength training for women",
    "period workout app",
    "follicular phase training",
    "luteal phase",
    "power window",
    "PR tracker",
    "e1RM",
    "Apple Watch strength tracker",
    "women's weightlifting app",
    "hormone cycle workout",
  ],
  authors: [{ name: "Cycle Synced Lifting" }],
  creator: "Cycle Synced Lifting",
  category: "health",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Phase — Cycle-Synced Lifting",
    title: "Phase — Cycle-Synced Lifting",
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
    title: "Phase — Cycle-Synced Lifting",
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
};

const siteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Phase — Cycle-Synced Lifting",
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
