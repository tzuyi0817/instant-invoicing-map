import InvoicingMap from '@/components/invoicing/invoicing-map';
import InvoicingProportion from '@/components/invoicing/invoicing-proportion';
import { readMapFiles } from '@/utils/readFile';
import { MapTopologyProperties } from '@/types/map';
import type { SelectAreaOption } from '@/types/select';

async function Invoicing() {
  const [county, town, village] = await readMapFiles();
  const countyOptions = county.objects.county.geometries.reduce(
    (options, { properties }) => {
      return options.push({ value: properties, label: properties.countyName }), options;
    },
    [{ value: null, label: '全台' }] as SelectAreaOption[],
  );
  const townOptionsMap = town.objects.town.geometries.reduce(
    (map, { properties }) => {
      const options = map[properties.countyId] ?? [];

      options.push({ value: properties, label: properties.townName });
      return Object.hasOwn(map, properties.countyId) ? map : ((map[properties.countyId] = options), map);
    },
    {} as Record<string, SelectAreaOption[]>,
  );
  const villageMap = village.objects.village.geometries.reduce(
    (map, { properties }) => {
      const villages = map[properties.townId] ?? [];

      villages.push(properties);
      return Object.hasOwn(map, properties.townId) ? map : ((map[properties.townId] = villages), map);
    },
    {} as Record<string, MapTopologyProperties[]>,
  );

  return (
    <>
      <InvoicingMap topology={{ county, town, village }} />
      <InvoicingProportion options={{ countyOptions, townOptionsMap, villageMap }} />
    </>
  );
}

export default Invoicing;
