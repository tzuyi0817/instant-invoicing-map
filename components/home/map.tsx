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

  function backToPreviousArea() {
    map.backToPreviousArea();
  }

  return (
    <div className="map-container">
      <svg className="map"></svg>
      <div className="tooltip"></div>
      <button
        className="absolute top-20 left-20"
        onClick={backToPreviousArea}
      >
        <Arrow className="stroke-white w-10 rotate-180 transition-all hover:stroke-red-400" />
      </button>
    </div>
  );
}

export default TaiwanMap;
