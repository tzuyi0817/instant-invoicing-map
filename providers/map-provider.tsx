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
import { MapTopology, MapTopologyProperties, MapArea } from '@/types/map';
import { INVOICING } from '@/constants/Invoicing';
import type { SelectAreaOption } from '@/types/select';

interface MapContext {
  county?: MapTopology;
  town?: MapTopology;
  village?: MapTopology;
  countyOptions: Array<SelectAreaOption>;
  townOptionsMap?: Record<string, SelectAreaOption[]> | null;
  villageMap?: Record<string, MapTopologyProperties[]> | null;
  proportion: MapTopologyProperties;
  selectedCounty: SelectAreaOption;
  selectedTown: SelectAreaOption | null;
  setCounty: Dispatch<SetStateAction<MapTopology | undefined>>;
  setTown: Dispatch<SetStateAction<MapTopology | undefined>>;
  setVillage: Dispatch<SetStateAction<MapTopology | undefined>>;
  setProportion: Dispatch<SetStateAction<MapTopologyProperties>>;
  setSelectedCounty: Dispatch<SetStateAction<SelectAreaOption>>;
  setSelectedTown: Dispatch<SetStateAction<SelectAreaOption | null>>;
  manualSelect: (area: MapArea | 'default', properties: MapTopologyProperties) => void;
}

const MapContext = createContext({} as MapContext);

function MapProvider({ children }: PropsWithChildren) {
  const [county, setCounty] = useState<MapTopology>();
  const [town, setTown] = useState<MapTopology>();
  const [village, setVillage] = useState<MapTopology>();
  const [proportion, setProportion] = useState<MapTopologyProperties>(INVOICING.default);
  const [selectedCounty, setSelectedCounty] = useState<SelectAreaOption>({ value: null, label: '全台' });
  const [selectedTown, setSelectedTown] = useState<SelectAreaOption | null>(null);

  const countyOptions = useMemo(() => {
    if (!county) return [{ value: null, label: '全台' }];
    return county.objects.county.geometries.reduce(
      (options, { properties }) => {
        return (options.push({ value: properties, label: properties.countyName }), options);
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

  function manualSelect(area: MapArea | 'default', properties: MapTopologyProperties) {
    if (area === 'village') return;
    const manualMap = {
      county: () => setSelectedCounty({ value: properties, label: properties.countyName }),
      town: () => setSelectedTown(properties.townName ? { value: properties, label: properties.townName } : null),
      default: () => setSelectedCounty({ value: null, label: '全台' }),
    } as const;

    manualMap[area]();
    setProportion(properties);
  }

  return (
    <MapContext.Provider
      value={{
        county,
        town,
        village,
        countyOptions,
        townOptionsMap,
        villageMap,
        proportion,
        selectedCounty,
        selectedTown,
        setCounty,
        setTown,
        setVillage,
        setProportion,
        setSelectedCounty,
        setSelectedTown,
        manualSelect,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export const useMap = () => useContext(MapContext);

export default MapProvider;
