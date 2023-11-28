import type { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Transition from '@/components/layout/transition';
import Loading from '@/components/common/loading';
import PrefetchMap from '@/components/common/prefetch-map';
import MapProvider from '@/providers/map-provider';
import '@/styles/globals.css';
import '@/styles/index.css';

const notoSansTC = Noto_Sans_TC({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Presidential election vote map',
  description: 'The 2020 President instantly opens a map of Taiwan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSansTC.className}>
        <Header />
        <MapProvider>
          <main className="container">
            <Transition>{children}</Transition>
          </main>
          <PrefetchMap />
        </MapProvider>
        <Footer />
        <Loading />
      </body>
    </html>
  );
}
