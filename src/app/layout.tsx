import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // optional: prevents invisible text during load
  variable: "--font-inter", // optional: useful for CSS variables or Tailwind
});

export const metadata: Metadata = {
  title: "Borhan Uddin",
  description: "Borhan Uddin - Full Stack Developer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Borhan Uddin",
    description: "Borhan Uddin - Full Stack Developer",
    url: "https://www.wapborhan.com",
    siteName: "Borhan Uddin",
    images: [
      {
        url: "https://borhanuddin.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Borhan Uddin",
    description: "Borhan Uddin - Full Stack Developer",
    images: ["https://borhanuddin.com/og-image.png"],
    creator: "@wapborhan",
    site: "@wapborhan",
  },
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Borhan Uddin",
    startupImage: [
      "/apple-touch-startup-image-640x1136.png",
      "/apple-touch-startup-image-750x1334.png",
      "/apple-touch-startup-image-1242x2208.png",
      "/apple-touch-startup-image-1125x2436.png",
      "/apple-touch-startup-image-828x1792.png",
      "/apple-touch-startup-image-1242x2688.png",
    ],
  },
  // manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  antialiased `}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
