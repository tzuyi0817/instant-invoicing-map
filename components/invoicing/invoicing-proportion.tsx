'use client';

import { useMemo } from 'react';
import InvoicingMap from '@/components/invoicing/invoicing-map';
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
  const { townOptionsMap, villageMap, countyOptions, proportion, setProportion } = useMap();
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
    <div className="flex flex-col lg:gap-6 lg:flex-row-reverse">
      <div className="flex flex-col gap-2 md:gap-4 lg:flex-col-reverse lg:flex-1">
        <InvoicingMap />
        <div className="px-[10px] md:px-[30px] lg:px-0">
          <InvoicingSearch
            options={{ townOptionsMap, countyOptions }}
            changeSearch={changeSearch}
          />
        </div>
      </div>
      <div className="px-[10px] md:px-[30px] lg:px-0 lg:w-[480px]">
        <InvoicingInformation proportion={proportion} />
        <InvoicingSupport neighborhoods={neighborhoods} />
      </div>
    </div>
  );
}

export default InvoicingProportion;
