import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryProviders } from "@/providers/query-provider";
import { Toaster } from "sonner";
import Head from 'next/head';

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
  title: "AdByteHub - Premier Digital Marketing Agency for Business Growth",
  description: "Boost your website's success with our powerful tools and strategies. Elevate your online presence, attract more visitors, and drive growth with expert marketing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <title>Adbytehub | Digital Marketing Experts</title>
        <meta name='impact-site-verification' content='f70338ff-5702-4d32-a198-dd35a546cdc3'/>
        <meta name="verify-admitad" content="4b176ae02c" />
        <meta name="clckd" content="2e8885973edd3528c89dedfd47b45021" />
        {/* Meta Tags for SEO */}
        <meta name="description" content="Drive your website's growth with Adbytehub. Our cutting-edge digital marketing solutions, including SEO, PPC, and lead generation, ensure maximum online visibility and success." />
        <meta name="keywords" content="digital marketing, SEO, PPC, lead generation, website traffic, online growth, marketing tools, pay per click, cost per lead, online promotion, Adbytehub" />
        <meta name="author" content="Adbytehub Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Adbytehub | Digital Marketing Experts" />
        <meta property="og:description" content="Partner with Adbytehub to boost your online presence and attract the right audience. Explore our expert strategies for website traffic growth and lead generation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adbytehub.com/" />
        <meta property="og:image" content="https://www.adbytehub.com/_next/image?url=%2Fbg-final.png&w=1080&q=75" />
        <meta property="og:image:alt" content="Adbytehub - Your Digital Marketing Partner" />
        <meta property="og:site_name" content="Adbytehub" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adbytehub | Digital Marketing Experts" />
        <meta name="twitter:description" content="Achieve your marketing goals with Adbytehub. From SEO to PPC, we offer tailored strategies to elevate your brand's online presence." />
        <meta name="twitter:image" content="https://www.adbytehub.com/_next/image?url=%2Fbg-final.png&w=1080&q=75" />
        <meta name="twitter:image:alt" content="Adbytehub - Your Digital Marketing Partner" />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="google-site-verification" content="MSAyJl_qfgQcz8i_jlfR982O9FaB-l9Geq4wp2B6PoY" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SGBJE2M8BW"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SGBJE2M8BW');
            `,
          }}
        ></script>
      </Head>
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
};