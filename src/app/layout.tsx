import React from 'react';
import type { Metadata } from 'next';
import { Inter, Instrument_Serif as InstrumentSerif } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '@/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const instrumentSerif = InstrumentSerif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  title: 'Celery - Own your code. Design Visually. Deploy Anywhere.',
  description: 'Celery is a visual development platform built around a marketplace of real React components and full-site templates.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          instrumentSerif.variable,
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
