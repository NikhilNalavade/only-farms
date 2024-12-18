import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

const georama = localFont({
  src: "./fonts/CormorantGaramond-Regular.ttf",
  variable: "--font-georama",
  weight: "100 900",
});

const playwrite = localFont({
  src: "./fonts/PlaywriteBEWALGuides-Regular.ttf",
  variable: "--font-playwrite",
  weight: "100 900",
});

const quintessential = localFont({
  src: "./fonts/Quintessential-Regular.ttf",
  variable: "--font-playwrite",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Only Farms",
  description:
    "onlyfams Farm to table subscription box that dilivers fresh products to door",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${georama.variable} ${playwrite.variable} ${quintessential.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
