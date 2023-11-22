import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NextUIProvider from '@/providers/nextui-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clone X',
  description: 'Social media clone',
  keywords: ['clone', 'social media'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
