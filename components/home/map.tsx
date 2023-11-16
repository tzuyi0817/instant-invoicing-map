'use client';

import { useEffect } from 'react';
import Map from '@/utils/map';
import Arrow from '@/assets/images/svg/arrow-right.svg';
import type { Topology } from '@/types/map';

interface Props {
  topology: Topology;
}

function TaiwanMap({ topology }: Props) {
  const map = Map.getInstance(topology);

  useEffect(() => {
    map.resetMap();
    map.drawMap();
    return () => map.resetMap();
  }, []);

  return (
    <div className="map-container w-screen h-screen overflow-hidden">
      {/* <svg className="map"></svg> */}
      <Arrow className="absolute left-7 stroke-red-500" />
    </div>
  );
}

export default TaiwanMap;
