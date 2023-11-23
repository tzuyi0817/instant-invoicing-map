import InvoicingMap from '@/components/invoicing/invoicing-map';
import InvoicingProportion from '@/components/invoicing/invoicing-proportion';
import { readMapFiles } from '@/utils/readFile';
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

  return (
    <>
      <InvoicingMap topology={{ county, town, village }} />
      <InvoicingProportion options={{ countyOptions, townOptionsMap }} />
    </>
  );
}

export default Invoicing;
