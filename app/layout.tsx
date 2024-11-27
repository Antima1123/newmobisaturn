import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryProviders } from "@/providers/query-provider";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "adbytehub",
  description: "Boost your website's success with our powerful tools and strategies. Elevate your online presence, attract more visitors, and drive growth with expert marketing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>adbytehub</title>
        <meta name="description" content="Boost your website's success with our powerful tools and strategies. Elevate your online presence, attract more visitors, and drive growth with expert marketing solutions." />
        <meta name="keywords" content="digital marketing, CPL, PPC, lead generation, online marketing, website promotion, increase traffic, marketing solutions, SEO strategies, cost per lead, pay per click" />
        <meta name="author" content="adbytehub" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="adbytehub" />
        <meta property="og:description" content="Boost your website's success with our powerful tools and strategies. Elevate your online presence, attract more visitors, and drive growth with expert marketing solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adbytehub.com/" />
        <meta property="og:image" content="	https://www.adbytehub.com/_next/image?url=%2Fbg-final.png&w=1080&q=75" />
        <meta property="og:image:alt" content="Adbytehub - Boost Your Online Presence" />

        <meta property="og:site_name" content="Adbytehub" />
        <meta property="og:locale" content="en_US" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProviders>
          <Toaster/>
          {children}
        </QueryProviders>
      </body>
    </html>
  );
}
