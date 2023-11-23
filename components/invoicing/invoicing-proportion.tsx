'use client';

import { useState } from 'react';
import InvoicingSearch from '@/components/invoicing/invoicing-search';
import type { SelectAreaOption } from '@/types/select';

interface Props {
  options: {
    countyOptions: Array<SelectAreaOption>;
    townOptionsMap: Record<string, Array<SelectAreaOption>>;
  };
}

interface ChangeSearchParams {
  county?: SelectAreaOption;
  town?: SelectAreaOption;
}

function InvoicingProportion({ options }: Props) {
  function changeSearch({ county, town }: ChangeSearchParams) {
    console.log({ county, town });
  }

  return (
    <div className="px-[10px]">
      <InvoicingSearch
        options={options}
        changeSearch={changeSearch}
      />
    </div>
  );
}

export default InvoicingProportion;
