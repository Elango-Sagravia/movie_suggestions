import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer/footer";
import AppProvider from "@/context/appContext";

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

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en" className={inter.className}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />

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
    </html>
  );
}
