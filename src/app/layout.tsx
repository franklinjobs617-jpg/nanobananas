import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import "./globals.css";

const gtAmerica = Inter({
  variable: "--font-gtamerica",
  subsets: ["latin"],
  display: "swap",
});

const gtAmericaMono = JetBrains_Mono({
  variable: "--font-gtamericamono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nanobananas.me"),
  title: {
    default: "nanobananas | 007 First Light Guide Hub",
    template: "%s | nanobananas",
  },
  description:
    "A compact 007 First Light guide hub built around verified release details, platform facts, screenshots, videos, and launch-ready walkthroughs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "nanobananas | 007 First Light Guide Hub",
    description:
      "A compact 007 First Light guide hub with source-backed release facts, videos, screenshots, and walkthrough pages.",
    url: "https://nanobananas.me",
    siteName: "nanobananas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "nanobananas | 007 First Light Guide Hub",
    description:
      "Source-backed 007 First Light guides with release facts, walkthroughs, screenshots, and videos.",
  },
  other: {
    "google-adsense-account": "ca-pub-3383070348689557",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gtAmerica.variable} ${gtAmericaMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-midnight-ink text-white-canvas">
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3383070348689557"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0BS5F771SF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0BS5F771SF');
          `}
        </Script>
        {children}
        <Footer />
      </body>
    </html>
  );
}
