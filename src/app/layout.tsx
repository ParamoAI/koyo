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
  title: "Koyo - AI-Powered K-12 Education",
  description:
    "Every student has a spark. Koyo uses AI to meet every student where they are with personalized K-12 education tools.",
  keywords: [
    "AI education",
    "K-12",
    "IEP",
    "special education",
    "AI literacy",
    "personalized learning",
  ],
  openGraph: {
    title: "Koyo - AI-Powered K-12 Education",
    description:
      "Every student has a spark. Koyo uses AI to meet every student where they are.",
    type: "website",
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
