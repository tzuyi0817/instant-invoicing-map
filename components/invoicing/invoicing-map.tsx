'use client';

import { useEffect } from 'react';
import InvoicingGradientGrid from '@/components/invoicing/invoicing-gradient-grid';
import Map from '@/utils/map';
import Arrow from '@/assets/images/svg/arrow.svg';
import type { Topology } from '@/types/map';

interface Props {
  topology: Topology;
}

function TaiwanMap({ topology }: Props) {
  const map = Map.getInstance(topology);

  useEffect(() => {
    map.resetMap();
    map.drawMap();
    return () => map.resetMap();
  }, []);

  function backToPreviousArea() {
    map.backToPreviousArea();
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
        className="icon absolute top-5 left-5 w-5"
        onClick={backToPreviousArea}
      />
    </div>
  );
}

export default TaiwanMap;
