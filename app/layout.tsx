import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Odyssey — Every customer has an origin story",
  description:
    "Explore Resend customer stories as Hero's Journey narratives. Built by Jacob Rucker.",
  openGraph: {
    title: "Odyssey — Every customer has an origin story",
    description:
      "Explore Resend customer stories as Hero's Journey narratives.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
