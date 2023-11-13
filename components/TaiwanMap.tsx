'use client';

import { useEffect } from 'react';
import Map from '@/utils/map';
import type { MapTopology } from '@/types/map';

interface Props {
  topology: MapTopology;
}

function TaiwanMap({ topology }: Props) {
  const map = Map.getInstance();

  useEffect(() => {
    map.draw(topology);
  }, []);

  return (
    <svg
      width="500"
      height="500"
    >
      <g className="counties"></g>
      <path className="county-borders"></path>
    </svg>
  );
}

export default TaiwanMap;
