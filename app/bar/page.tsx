'use client';

import { useEffect } from 'react';
import Bar from '@/utils/bar';

const bar = new Bar();
const data = [
  { x: 1, w: Math.floor(Math.random() * 200) },
  { x: 2, w: Math.floor(Math.random() * 200) },
  { x: 3, w: Math.floor(Math.random() * 200) },
  { x: 4, w: Math.floor(Math.random() * 200) },
  { x: 5, w: Math.floor(Math.random() * 200) },
];

function Page() {
  useEffect(() => {
    bar.createBar({
      selector: '.bar',
      width: 300,
      height: 300,
    });
    bar.drawBar(data);
    bar.drawText(data);
    return () => bar.removeBar();
  }, []);

  return (
    <main className="pt-20 px-3">
      <svg className="bar"></svg>
    </main>
  );
}

export default Page;
