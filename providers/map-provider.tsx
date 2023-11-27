'use client';

import {
  createContext,
  useContext,
  useState,
  useMemo,
  type PropsWithChildren,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { MapTopology, MapTopologyProperties } from '@/types/map';
import type { SelectAreaOption } from '@/types/select';

interface MapContext {
  county?: MapTopology;
  town?: MapTopology;
  village?: MapTopology;
  countyOptions: Array<SelectAreaOption>;
  townOptionsMap?: Record<string, SelectAreaOption[]> | null;
  villageMap?: Record<string, MapTopologyProperties[]> | null;
  setCounty: Dispatch<SetStateAction<MapTopology | undefined>>;
  setTown: Dispatch<SetStateAction<MapTopology | undefined>>;
  setVillage: Dispatch<SetStateAction<MapTopology | undefined>>;
}

const MapContext = createContext({} as MapContext);

function MapProvider({ children }: PropsWithChildren) {
  const [county, setCounty] = useState<MapTopology>();
  const [town, setTown] = useState<MapTopology>();
  const [village, setVillage] = useState<MapTopology>();

  const countyOptions = useMemo(() => {
    if (!county) return [{ value: null, label: '全台' }];
    return county.objects.county.geometries.reduce(
      (options, { properties }) => {
        return options.push({ value: properties, label: properties.countyName }), options;
      },
      [{ value: null, label: '全台' }] as SelectAreaOption[],
    );
  }, [county]);

  const townOptionsMap = useMemo(() => {
    if (!town) return null;
    return town.objects.town.geometries.reduce(
      (map, { properties }) => {
        const options = map[properties.countyId] ?? [];

        options.push({ value: properties, label: properties.townName });
        return Object.hasOwn(map, properties.countyId) ? map : ((map[properties.countyId] = options), map);
      },
      {} as Record<string, SelectAreaOption[]>,
    );
  }, [town]);

  const villageMap = useMemo(() => {
    if (!village) return null;
    return village.objects.village.geometries.reduce(
      (map, { properties }) => {
        const villages = map[properties.townId] ?? [];

        villages.push(properties);
        return Object.hasOwn(map, properties.townId) ? map : ((map[properties.townId] = villages), map);
      },
      {} as Record<string, MapTopologyProperties[]>,
    );
  }, [village]);

  return (
    <MapContext.Provider
      value={{
        county,
        town,
        village,
        countyOptions,
        townOptionsMap,
        villageMap,
        setCounty,
        setTown,
        setVillage,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export const useMap = () => useContext(MapContext);

export default MapProvider;
