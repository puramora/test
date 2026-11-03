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
  title: "My First Site",
  description: "가장 단순한 Next.js 프로젝트",
  verification: {
    google: "PoJyMfHCMOhSo-PpEOZOC3iEUpie5fa3FApsUeVQoGA",
    other: {
      "naver-site-verification": "d6aa24194d2745c5fe9b5b326fdaf4b717b081f9",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="PoJyMfHCMOhSo-PpEOZOC3iEUpie5fa3FApsUeVQoGA"
        />
        <meta
          name="naver-site-verification"
          content="d6aa24194d2745c5fe9b5b326fdaf4b717b081f9"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
