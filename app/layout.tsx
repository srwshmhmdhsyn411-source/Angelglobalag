import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srwshmhmdhsyn411-source.github.io/Angelglobalag"),
  title: "Angel Global AG — Creating Value Beyond Borders",
  description:
    "Angel Global AG is a Swiss corporation connecting strategic investment, international partnerships and responsible governance.",
  alternates: {
    canonical: "https://srwshmhmdhsyn411-source.github.io/Angelglobalag",
  },
  openGraph: {
    title: "Angel Global AG — Creating Value Beyond Borders",
    description:
      "A Swiss holding company connecting strategic investment, responsible governance and international opportunity.",
    url: "https://srwshmhmdhsyn411-source.github.io/Angelglobalag",
    siteName: "Angel Global AG",
    type: "website",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/Angelglobalag/favicon.svg",
    shortcut: "/Angelglobalag/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
