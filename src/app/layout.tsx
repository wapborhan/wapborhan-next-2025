import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    url: "https://borhanuddin.com",
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
    creator: "@borhanuddin",
    site: "@borhanuddin",
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
  manifest: "/site.webmanifest",

  viewport: {
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    width: "device-width",
    height: "device-height",
  },

  verification: {
    google: "google-site-verification",
    yandex: "yandex-verification",
    other: {
      name: "other-verification",
      value: "other-verification-value",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
