import React from 'react';
import type { Metadata } from "next";
import { Poppins, VT323, Inria_Serif, Lexend } from "next/font/google";
import '@/styles/globals.css';
import '@/styles/main.scss';
import '@/styles/footer.scss';
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({ 
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
});

const inriaSerif = Inria_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inria',
});

const lexend = Lexend({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: "Lynxify | Intuitive Innovation You Can Trust",
  description: "Award-winning Web3 development studio specializing in DeFi, AI agents, and blockchain infrastructure. Building trustworthy solutions on Hedera and beyond.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: "Lynxify | Intuitive Innovation You Can Trust",
    description: "Award-winning Web3 development studio specializing in DeFi, AI agents, and blockchain infrastructure. Building trustworthy solutions on Hedera and beyond.",
    url: "https://lynxify.xyz/",
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Lynxify - Intuitive Innovation You Can Trust',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lynxify | Intuitive Innovation You Can Trust",
    description: "Award-winning Web3 development studio specializing in DeFi, AI agents, and blockchain infrastructure. Building trustworthy solutions on Hedera and beyond.",
    images: ['/share.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inriaSerif.variable} ${vt323.variable} ${lexend.variable}`}>
        {children}
      </body>
    </html>
  );
} 