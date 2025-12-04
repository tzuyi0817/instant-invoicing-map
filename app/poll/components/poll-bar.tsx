'use client';

import { useState, useMemo, useEffect } from 'react';
import { POLL_DATE, POLL_MAP } from '@/constants/poll';
import useResize from '@/hooks/useResize';
import Bar from '@/utils/bar';

const bar = new Bar();

function PollBar() {
  const [currentDate, setDate] = useState<keyof typeof POLL_MAP>(POLL_DATE[0]);
  const currentPoll = useMemo(() => POLL_MAP[currentDate], [currentDate]);

  useResize(rerenderBar);
  useEffect(() => {
    bar.resetBar('.poll-bar-container');
  }, []);

  useEffect(() => {
    bar.createBar('.poll-bar');
    bar.drawBar(currentPoll);
    return () => bar.removeBar();
  }, [currentPoll]);

  function rerenderBar() {
    bar.removeBar();
    requestAnimationFrame(() => {
      bar.resetBar('.poll-bar-container');
      bar.createBar('.poll-bar');
      bar.drawBar(currentPoll);
    });
  }

  return (
    <div className="py-5 md:py-10 lg:py-[60px]">
      <div className="flex h-fit justify-between gap-7 lg:items-center">
        <div className="poll-bar-container flex-1 lg:min-h-[490px]">
          <svg className="poll-bar h-full w-full"></svg>
        </div>
        <div className="flex flex-col gap-2 md:gap-7">
          {POLL_DATE.map(date => {
            return (
              <button
                key={date}
                className={`btn-rounded whitespace-nowrap text-xs md:text-lg ${currentDate === date ? 'active' : ''}`}
                onClick={() => setDate(date)}
              >
                {date}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PollBar;
