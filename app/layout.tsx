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
    "Transform any Resend customer case study into a compelling Hero's Journey narrative. Built by Jacob Rucker.",
  openGraph: {
    title: "Odyssey — Every customer has an origin story",
    description:
      "Transform Resend customer case studies into Hero's Journey narratives.",
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
      <body className="min-h-screen bg-resend-black text-resend-white antialiased">
        {children}
      </body>
    </html>
  );
}
