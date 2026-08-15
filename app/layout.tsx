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
  title: "To see the world",
  description: "探索世界，发现更好的自己",
  keywords: ["探索世界", "发现更好的自己", "LOT智能家居", "智能家居产品", "智能家居开发商"],
  openGraph: {
    title: "To see the world — 探索世界，发现更好的自己",
    description: "探索世界，发现更好的自己",
    images: ["/images/og-cover.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


