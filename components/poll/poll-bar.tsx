'use client';

import { useState, useMemo, useEffect } from 'react';
import { POLLS_DATE, POLL_MAP } from '@/configs/poll';
import Bar from '@/utils/bar';

interface Poll {
  candidate: string;
  popularity: number;
}

const bar = new Bar();

function PollBar() {
  const [currentDate, setDate] = useState<keyof typeof POLL_MAP>(POLLS_DATE[0]);
  const currentPoll = useMemo(() => POLL_MAP[currentDate], [currentDate]);

  useEffect(() => {
    bar.createBar('.bar');
    bar.drawBar(currentPoll);
    return () => bar.removeBar();
  }, [currentPoll]);

  return (
    <div className="py-5">
      <div className="flex justify-between gap-7">
        <svg className="bar"></svg>
        <div className="flex flex-col gap-2">
          {POLLS_DATE.map(date => {
            return (
              <button
                key={date}
                className={`btn-rounded text-xs whitespace-nowrap ${currentDate === date ? 'active' : ''}`}
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