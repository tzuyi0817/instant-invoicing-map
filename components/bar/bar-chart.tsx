'use client';

import { useEffect } from 'react';
import Bar from '@/utils/bar';

const bar = new Bar();
const buttonStyle = 'bg-gray-300 rounded px-3 py-1 m-2';
const data = [
  { x: 1, w: Math.floor(Math.random() * 200) },
  { x: 2, w: Math.floor(Math.random() * 200) },
  { x: 3, w: Math.floor(Math.random() * 200) },
  { x: 4, w: Math.floor(Math.random() * 200) },
  { x: 5, w: Math.floor(Math.random() * 200) },
];

function BarChart() {
  useEffect(() => {
    bar.createBar({
      selector: '.bar-chart',
      width: 300,
      height: 300,
    });
    bar.drawBar(data);
    bar.drawText(data);
    return () => bar.removeBar();
  }, []);

  function changeData(isRandom = false) {
    data.forEach(item => {
      item.w = isRandom ? Math.floor(Math.random() * 200) : 0;
    });
    bar.changeData(data);
  }

  return (
    <>
      <button
        className={buttonStyle}
        onClick={() => changeData(true)}
      >
        切換數據
      </button>
      <button
        className={buttonStyle}
        onClick={() => changeData()}
      >
        歸零
      </button>
      <svg className="bar-chart"></svg>
    </>
  );
}

export default BarChart;
