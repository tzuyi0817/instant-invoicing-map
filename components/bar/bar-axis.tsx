'use client';

import { useEffect } from 'react';
import Bar from '@/utils/bar';

interface Props {
  county: Record<string, Record<string, number | string>[]>;
}

const bar = new Bar();

function BarVote({ county }: Props) {
  useEffect(() => {
    bar.createBar({
      selector: '.bar-axis',
      width: 600,
      height: 300,
    });
    bar.drawVoteBar(county.COUNTY);
    return () => bar.removeBar();
  }, []);

  return (
    <div>
      <svg className="bar-axis"></svg>
      <div id="toolTip"></div>
    </div>
  );
}

export default BarVote;
