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
  metadataBase: new URL("https://mangoai.kr"),
  title: "망고에이아이내 사이트 제목",
  description: "문의사항남겨주세요",
  openGraph: {
    title: "망고에이아이내 사이트 제목",
    description: "문의사항남겨주세요",
    url: "https://mangoai.kr",
    siteName: "망고에이아이내 사이트 제목",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "망고에이아이내 사이트 제목",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "망고에이아이내 사이트 제목",
    description: "문의사항남겨주세요",
    images: ["/profile.png"],
  },
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
