'use client';

import { useState } from 'react';
import InvoicingSearch from '@/components/invoicing/invoicing-search';
import InvoicingInformation from '@/components/invoicing/invoicing-information';
import InvoicingSupport from '@/components/invoicing/invoicing-support';
import { INVOICING } from '@/configs/Invoicing';
import type { SelectAreaOption } from '@/types/select';
import type { MapTopologyProperties } from '@/types/map';

interface Props {
  options: {
    countyOptions: Array<SelectAreaOption>;
    townOptionsMap: Record<string, Array<SelectAreaOption>>;
  };
}

interface ChangeSearchParams {
  county?: MapTopologyProperties | null;
  town?: MapTopologyProperties | null;
}

function InvoicingProportion({ options }: Props) {
  const [proportion, setProportion] = useState<MapTopologyProperties>(INVOICING.default);

  function changeSearch({ county, town }: ChangeSearchParams) {
    setProportion(town ?? county ?? INVOICING.default);
  }

  return (
    <div className="px-[10px]">
      <InvoicingSearch
        options={options}
        changeSearch={changeSearch}
      />
      <InvoicingInformation proportion={proportion} />
      <InvoicingSupport />
    </div>
  );
}

export default InvoicingProportion;
