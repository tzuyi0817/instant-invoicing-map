'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
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
    <div className="flex flex-col gap-4 lg:gap-6 lg:flex-row-reverse lg:items-center">
      <motion.div
        className="flex flex-col gap-2 md:gap-4 lg:flex-col-reverse lg:flex-1"
        initial={{ translateX: '30%' }}
        animate={{
          translateX: 'none',
          transition: { type: 'spring', stiffness: 500 },
          transitionEnd: { transform: 'none' },
        }}
      >
        <InvoicingMap />
        <div className="px-[10px] md:px-[30px] lg:px-0">
          <InvoicingSearch
            options={{ townOptionsMap, countyOptions }}
            changeSearch={changeSearch}
          />
        </div>
      </motion.div>
      <motion.div
        className="px-[10px] md:px-[30px] lg:px-0 lg:w-[480px]"
        initial={{ translateX: '-30%' }}
        animate={{
          translateX: '0%',
          transition: { type: 'spring', stiffness: 500 },
        }}
      >
        <InvoicingInformation proportion={proportion} />
        <InvoicingSupport neighborhoods={neighborhoods} />
      </motion.div>
    </div>
  );
}

export default InvoicingProportion;
