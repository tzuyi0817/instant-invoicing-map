import type { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';
import Header from '@/components/layout/header';
import '@/styles/globals.css';
import '@/styles/index.css';

const notoSansTC = Noto_Sans_TC({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Presidential election vote map',
  description: '2020 presidential election vote map.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSansTC.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
