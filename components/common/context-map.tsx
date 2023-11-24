'use client';

import { useEffect } from 'react';
import { useMap } from '@/providers/map-provider';
import type { Topology } from '@/types/map';

interface Props {
  topology: Topology;
}

function ContextMap({ topology }: Props) {
  const { setCounty, setTown, setVillage } = useMap();

  useEffect(() => {
    setCounty(topology.county);
    setTown(topology.town);
    setVillage(topology.village);
  }, []);

  return null;
}

export default ContextMap;
