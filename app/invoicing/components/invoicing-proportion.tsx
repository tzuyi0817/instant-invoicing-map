'use client';

import { useMemo, useRef } from 'react';
import { motion } from 'motion/react';
import InvoicingMap from './invoicing-map';
import InvoicingSearch from './invoicing-search';
import InvoicingInformation from './invoicing-information';
import InvoicingSupport from './invoicing-support';
import { INVOICING } from '@/constants/Invoicing';
import { useMap } from '@/providers/map-provider';
import type { MapTopologyProperties } from '@/types/map';

interface ChangeSearchParams {
  county?: MapTopologyProperties | null;
  town?: MapTopologyProperties | null;
}

function InvoicingProportion() {
  const { townOptionsMap, villageMap, countyOptions, proportion, setProportion } = useMap();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const neighborhoods = useMemo(() => {
    const { countyId, townId } = proportion;

    if (villageMap && townId) return villageMap[townId];
    if (townOptionsMap && countyId) return townOptionsMap[countyId].map(({ value }) => value);
    return countyOptions.map(({ value }) => value).filter(Boolean);
  }, [proportion, townOptionsMap, villageMap, countyOptions]);

  function changeSearch({ county, town }: ChangeSearchParams) {
    setProportion(town ?? county ?? INVOICING.default);
  }

  function onAnimationComplete() {
    if (!mapContainerRef.current) return;
    mapContainerRef.current.style.transform = 'none';
  }

  return (
    <div className="flex flex-col gap-4 lg:flex-row-reverse lg:items-center lg:gap-6">
      <motion.div
        ref={mapContainerRef}
        className="flex flex-col gap-2 md:gap-4 lg:flex-1 lg:flex-col-reverse"
        initial={{ translateX: '30%' }}
        animate={{
          translateX: '0%',
          transitionEnd: { transform: 'none' },
        }}
        transition={{ type: 'spring', stiffness: 500 }}
        onAnimationComplete={onAnimationComplete}
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
        className="px-[10px] md:px-[30px] lg:w-[480px] lg:px-0"
        initial={{ translateX: '-30%' }}
        animate={{ translateX: '0%' }}
        transition={{ type: 'spring', stiffness: 500 }}
      >
        <InvoicingInformation proportion={proportion} />
        <InvoicingSupport neighborhoods={neighborhoods} />
      </motion.div>
    </div>
  );
}

export default InvoicingProportion;
