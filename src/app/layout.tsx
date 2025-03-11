import React from 'react';
import type { Metadata } from "next";
import { Poppins, VT323, Inria_Serif } from "next/font/google";
import '@/styles/main.scss';
import '@/styles/footer.scss';

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

export const metadata: Metadata = {
  title: "Lynxify | Smart Trading",
  description: "Unlock the power of automated trading with Lynxify's advanced DEX. Set your strategies, trade effortlessly, and maximize your crypto potential.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: "Lynxify | Smart Trading",
    description: "Unlock the power of automated trading with Lynxify's advanced DEX. Set your strategies, trade effortlessly, and maximize your crypto potential.",
    url: "https://lynxify.xyz/",
    images: [
      {
        url: '/share.jpg',
        width: 1200,
        height: 630,
        alt: 'Your site share image',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lynxify | Smart Trading",
    description: "Unlock the power of automated trading with Lynxify's advanced DEX. Set your strategies, trade effortlessly, and maximize your crypto potential.",
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
      <body className={`${poppins.variable} ${inriaSerif.variable} ${vt323.variable}`}>
        {children}
      </body>
    </html>
  );
} 