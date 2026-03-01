import type { Metadata } from "next";
import { Geist, Geist_Mono, Staatliches} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const staatliches = Staatliches({
  variable: "--font-staatliches",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Connected Neighbor",
  description: "The last business card you'll ever need. Reusable, shareable, and sustainable resources for a stronger community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${staatliches.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
