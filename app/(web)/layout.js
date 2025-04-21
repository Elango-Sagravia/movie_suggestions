import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer/footer";
import AppProvider from "@/context/appContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const thumbnail = "/og.png";
const baseUrl = process.env.url;
export async function generateMetadata() {
  const title = "Movie Suggestions – Find the Perfect Film for Any Mood";

  const description =
    "Discover the best movie recommendations tailored to your mood and preferences. Get personalized suggestions across genres and streaming platforms at MovieSuggestions";

  return {
    metadataBase: new URL(process.env.url),
    title,
    description,
    alternates: {
      canonical: "https://www.moviesuggestions.com",
    },
    themeColor: "#f9d543",
    openGraph: {
      title,
      description,
      url: baseUrl,
      images: [
        {
          url: thumbnail,
          secureUrl: thumbnail,
          alt: "Movie Suggestions",
        },
      ],
      type: "website",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Movie Suggestions",
  alternateName: "moviesuggestions",
  url: "https://www.moviesuggestions.com/",
  logo: "https://www.moviesuggestions.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "(307) 429-0673",
    contactType: "customer service",
    contactOption: "TollFree",
    areaServed: "US",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61574440239538",
    "https://www.instagram.com/moviesuggestions",
    "https://x.com/MovieSuggest",
    "https://www.linkedin.com/showcase/movie-suggestions/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Script id="gm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TPFW5GPP');`}
        </Script>
        <Script
          id="gtm-noscript"
          dangerouslySetInnerHTML={{
            __html: `
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPFW5GPP"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
    `,
          }}
        />
      </head>

      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AppProvider>
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </AppProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-N0W9YB9XVZ" />
    </html>
  );
}
