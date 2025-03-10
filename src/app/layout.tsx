import { ThemeProvider } from "@/components/theme-provider";
import { SkipNav } from "@/components/ui/skip-nav";
import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

// Optimize font loading with display swap and font subsetting
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Load only the weights we need
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Supaboost - Expert Superannuation Advice for Australians",
    template: "%s | Supaboost",
  },
  description:
    "Personalized superannuation advice to help Australians maximize their retirement funds and secure their financial future.",
  keywords:
    "superannuation, retirement planning, financial advice, super fund, Australia",
  authors: [
    {
      name: "Supaboost",
      url: "https://supaboost.com.au",
    },
  ],
  creator: "Supaboost",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://supaboost.com.au",
    title: "Supaboost - Expert Superannuation Advice",
    description:
      "Helping Australians secure their financial future through expert superannuation advice",
    siteName: "Supaboost",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Supaboost - Expert Superannuation Advice for Australians",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supaboost - Expert Superannuation Advice",
    description:
      "Helping Australians secure their financial future through expert superannuation advice",
    images: ["/twitter-image.jpg"],
    creator: "@supaboost",
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
      className="scroll-pt-16 scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <SkipNav contentId="main-content" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
