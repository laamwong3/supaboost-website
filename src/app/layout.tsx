import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

// Optimize font loading with display swap
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
};

export const metadata: Metadata = {
  title: "Supaboost - Expert Superannuation Advice for Australians",
  description:
    "Personalized superannuation advice to help Australians maximize their retirement funds and secure their financial future.",
  keywords:
    "superannuation, retirement planning, financial advice, super fund, Australia",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://supaboost.com.au",
    title: "Supaboost - Expert Superannuation Advice",
    description:
      "Helping Australians secure their financial future through expert superannuation advice",
    siteName: "Supaboost",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-16 scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
