import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import 'katex/dist/katex.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Metadata, Viewport } from "next";
import { Syne } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from "sonner";
import "./globals.css";
import { Providers } from './providers';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });

export const metadata: Metadata = {
  metadataBase: new URL("https://thaki.ai"),
  title: "ذكي 🤖",
  description: "محرك بحث ذكي مدعوم بالذكاء الاصطناعي يساعدك في العثور على المعلومات على الإنترنت.",
  openGraph: {
    url: "https://thaki.ai",
    siteName: "ذكي",
  },
  keywords: [
    "thaki.ai",
    "thaki ai",
    "Thaki AI",
    "thaki AI",
    "THAKI.AI",
    "thaki github",
    "ai search engine",
    "Thaki",
    "thaki",
    "thaki.app",
    "thaki ai",
    "thaki ai app",
    "thaki",
    "open source ai search engine",
    "minimalistic ai search engine",
    "ai search engine",
    "AI Search Engine",
    "search engine",
    "AI",
    "ذكي",
    "ذكاء اصطناعي",
    "محرك بحث",
    "محرك بحث ذكي",
  ]
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${syne.variable} font-arabic antialiased`}>
        <Providers>
          <NuqsAdapter />
          {children}
          <Toaster position="bottom-center" />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
