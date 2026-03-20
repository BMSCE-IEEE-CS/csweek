import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CS Week 2026 | BMSCE IEEE Computer Society",
    template: "%s | CS Week 2026",
  },
  description:
    "CS Week 2026 is BMSCE IEEE Computer Society  's celebrations of 80 years of IEEE Computer Society with a Codeathon, Cryptic Treasure Hunt, Multi-Club Collaborations, and a 24-Hour Hackathon. March 30 - April 5, 2026.",
  keywords: [
    "CS Week 2026",
    "BMSCE",
    "BMSCE IEEE",
    "BMSCE IEEE Computer Society",
    "IEEE Computer Society",
    "Computer Society Week",
    "Hackathon Bangalore",
    "Codeathon",
    "Cryptic Treasure Hunt",
    "BMS College of Engineering",
    "IEEE Student Branch",
    "Tech Events Bangalore",
    "College Hackathon 2026",
    "80th Anniversary IEEE CS",
  ],
  authors: [{ name: "BMSCE IEEE Computer Society" }],
  creator: "BMSCE IEEE Computer Society",
  publisher: "BMSCE IEEE Computer Society",
  metadataBase: new URL("https://csweek.bmsceieeecs.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CS Week 2026 | BMSCE IEEE Computer Society",
    description:
      "Join us for CS Week 2026 - celebrating 80 years of IEEE Computer Society. Codeathon · Cryptic Hunt · Collabs · 24HR Hackathon. March 30 - April 5, 2026 at BMSCE, Bengaluru.",
    type: "website",
    url: "https://csweek.bmsceieeecs.in",
    siteName: "CS Week 2026",
    locale: "en_IN",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "CS Week 2026 | BMSCE IEEE Computer Society",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CS Week 2026 | BMSCE IEEE Computer Society",
    description:
      "Codeathon · Cryptic Hunt · Collabs · 24HR Hackathon. March 30 - April 5, 2026 at BMSCE, Bengaluru.",
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
