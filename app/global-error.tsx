'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">
          <h2>資源載入失敗</h2>
          <button
            className="btn"
            onClick={() => reset()}
          >
            重試一次
          </button>
        </main>
        <Footer />
      </body>
    </html>
  );
}
