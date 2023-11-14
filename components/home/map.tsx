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
    map.resetMap();
    map.drawMap(topology);
    return () => map.removeMap();
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <svg id="map"></svg>
    </div>
  );
}

export default TaiwanMap;
