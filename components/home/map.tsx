'use client';

import { useEffect } from 'react';
import Map from '@/utils/map';
import type { Topology } from '@/types/map';

interface Props {
  topology: Topology;
}

function TaiwanMap({ topology }: Props) {
  const map = Map.getInstance(topology);

  useEffect(() => {
    map.resetMap();
    map.drawMap();
    return () => map.removeMap();
  }, []);

  return (
    <div className="map-container w-screen h-screen overflow-hidden">
      <svg id="map"></svg>
    </div>
  );
}

export default TaiwanMap;
