'use client';

import { useEffect, useRef, useMemo, useCallback } from 'react';
import InvoicingGradientGrid from './invoicing-gradient-grid';
import { useMap } from '@/providers/map-provider';
import useResize from '@/hooks/useResize';
import Map from '@/utils/map';
import Arrow from '@/assets/images/svg/arrow.svg';

function TaiwanMap() {
  const { county, town, village, proportion, manualSelect } = useMap();
  const map = Map.getInstance(manualSelect);
  const isReturning = useRef(false);
  const backIconClass = useMemo(() => {
    return proportion.countyId ? 'opacity-100' : 'opacity-0 pointer-events-none';
  }, [proportion]);

  const backToPreviousArea = useCallback(
    async (isTwice = false) => {
      const times = isTwice ? 2 : 1;

      for (let i = 0; i < times; i++) {
        isReturning.current = true;
        await map.backToPreviousArea();
        isReturning.current = false;
      }
    },
    [map],
  );

  useResize(rerenderMap);
  useEffect(() => {
    if (!county || !town || !village) return;
    map.setTopology({ county, town, village });
    map.resetMap();
    map.drawMap();
    return () => map.resetMap();
  }, [county, town, village]);

  useEffect(() => {
    if (isReturning.current) return;
    const { townId, countyId } = proportion;
    const selectMap = {
      id: townId ?? countyId,
      parentId: countyId,
    };

    selectMap.id ? map.selectArea(selectMap) : backToPreviousArea(true);
  }, [proportion, map, backToPreviousArea]);

  function rerenderMap() {
    map.resetMap();
    requestAnimationFrame(() => {
      map.drawMap();
    });
  }

  return (
    <div className="map-container">
      <div className="h-full w-full overflow-hidden">
        <svg className="map"></svg>
      </div>

      <div className="absolute right-5 top-5 flex flex-col gap-1">
        <InvoicingGradientGrid linearGradient="bg-[linear-gradient(to_left,#25A55C_0%_33.3%,#30CB73_33.3%_66.6%,#8AF1B6_66.6%_100%)]">
          民進黨
        </InvoicingGradientGrid>
        <InvoicingGradientGrid linearGradient="bg-[linear-gradient(to_left,#4A8FE7_0%_33.3%,#7EB2F4_33.3%_66.6%,#BBD9FF_66.6%_100%)]">
          國民黨
        </InvoicingGradientGrid>
        <InvoicingGradientGrid
          linearGradient="bg-[linear-gradient(to_left,#F88545_0%_33.3%,#F79E6D_33.3%_66.6%,#FFB58C_66.6%_100%)]"
          showProportion
        >
          親民黨
        </InvoicingGradientGrid>
      </div>
      <div className="tooltip"></div>
      <Arrow
        className={`icon absolute left-5 top-5 w-5 ${backIconClass} md:w-9`}
        onClick={() => backToPreviousArea()}
      />
    </div>
  );
}

export default TaiwanMap;
