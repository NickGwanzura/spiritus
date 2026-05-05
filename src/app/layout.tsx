import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import JsonLd from "@/components/JsonLd";
import PageLoadHandler from "@/components/PageLoadHandler";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const FONTSHARE_URL =
  "https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_ZW",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME}: ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZW"
      className={`${geistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link rel="preload" as="style" href={FONTSHARE_URL} />
        <link
          rel="stylesheet"
          href={FONTSHARE_URL}
          media="print"
          data-fontshare=""
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.querySelector('link[data-fontshare]');if(!l)return;var swap=function(){l.media='all';};if(l.sheet){swap();}else{l.addEventListener('load',swap,{once:true});}})();`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<link rel="stylesheet" href="${FONTSHARE_URL}" />`,
          }}
        />
      </head>
      <body>
        <JsonLd id="ld-organization" data={organizationJsonLd()} />
        <JsonLd id="ld-website" data={websiteJsonLd()} />
        <JsonLd id="ld-localbusiness" data={localBusinessJsonLd()} />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <PageLoadHandler />
      </body>
    </html>
  );
}
