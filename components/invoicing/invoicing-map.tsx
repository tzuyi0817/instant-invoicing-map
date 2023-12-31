'use client';

import { useEffect, useRef, useMemo } from 'react';
import InvoicingGradientGrid from '@/components/invoicing/invoicing-gradient-grid';
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
  }, [proportion]);

  async function backToPreviousArea(isTwice = false) {
    isReturning.current = true;
    await map.backToPreviousArea();
    isReturning.current = false;
    isTwice && backToPreviousArea();
  }

  function rerenderMap() {
    map.resetMap();
    requestAnimationFrame(() => {
      map.drawMap();
    });
  }

  return (
    <div className="map-container">
      <svg className="map"></svg>
      <div className="absolute top-5 right-5 flex flex-col gap-1">
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
        className={`icon absolute top-5 left-5 w-5 ${backIconClass} md:w-9`}
        onClick={() => backToPreviousArea()}
      />
    </div>
  );
}

export default TaiwanMap;
