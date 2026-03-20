import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CS Week 2026 - BMSCE IEEE Computer Society",
  description:
    "Celebrating 80 years of IEEE Computer Society. CS Week: 30th March - 5th April 2026. Codeathon, Cryptic Treasure Hunt, Hackathon & more.",
  keywords: [
    "CS Week",
    "BMSCE",
    "IEEE",
    "Computer Society",
    "Hackathon",
    "Codeathon",
  ],
  openGraph: {
    title: "CS Week 2026 - BMSCE IEEE CS",
    description:
      "March 30 - April 5, 2026 | Codeathon · Treasure Hunt · Hackathon",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
