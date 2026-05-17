import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./Providers";
import NextTopLoader from "nextjs-toploader";

const lexendSans = localFont({
  src: "./fonts/Lexend-VariableFont_wght.ttf",
  variable: "--font-lexend",
  display: "swap",
});

const urbanist = localFont({
  src: "./fonts/Urbanist-VariableFont_wght.ttf",
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estatein Real Estate",
  description: "Buy, sell, and rent properties with ease on Estatein Real Estate. Your trusted platform for all your real estate needs.",
  colorScheme: "dark",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${lexendSans.variable} ${urbanist.variable} antialiased`}
      >
        <NextTopLoader
          color="#703BF7"
          height={4}
          speed={500}
          showSpinner={false}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
