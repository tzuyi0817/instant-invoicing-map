'use client';

import { useState, useMemo } from 'react';
import InvoicingSearch from '@/components/invoicing/invoicing-search';
import InvoicingInformation from '@/components/invoicing/invoicing-information';
import InvoicingSupport from '@/components/invoicing/invoicing-support';
import { INVOICING } from '@/configs/Invoicing';
import { useMap } from '@/providers/map-provider';
import type { MapTopologyProperties } from '@/types/map';

interface ChangeSearchParams {
  county?: MapTopologyProperties | null;
  town?: MapTopologyProperties | null;
}

function InvoicingProportion() {
  const { townOptionsMap, villageMap, countyOptions } = useMap();
  const [proportion, setProportion] = useState<MapTopologyProperties>(INVOICING.default);
  const neighborhoods = useMemo(() => {
    const { countyId, townId } = proportion;

    if (villageMap && townId) return villageMap[townId];
    if (townOptionsMap && countyId) return townOptionsMap[countyId].map(({ value }) => value);
    return countyOptions.map(({ value }) => value).filter(Boolean);
  }, [proportion, townOptionsMap, villageMap, countyOptions]);

  function changeSearch({ county, town }: ChangeSearchParams) {
    setProportion(town ?? county ?? INVOICING.default);
  }

  return (
    <div className="px-[10px]">
      <InvoicingSearch
        options={{ townOptionsMap, countyOptions }}
        changeSearch={changeSearch}
      />
      <InvoicingInformation proportion={proportion} />
      <InvoicingSupport neighborhoods={neighborhoods} />
    </div>
  );
}

export default InvoicingProportion;
