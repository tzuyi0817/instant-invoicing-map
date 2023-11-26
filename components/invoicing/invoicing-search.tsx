import { useState, useMemo, useEffect } from 'react';
import Select from '@/components/common/select';
import SearchBtn from '@/assets/images/svg/search-btn.svg';
import Info from '@/assets/images/svg/info.svg';
import type { SelectAreaOption } from '@/types/select';
import type { MapTopologyProperties } from '@/types/map';

interface ChangeSearchParams {
  county?: MapTopologyProperties | null;
  town?: MapTopologyProperties | null;
}

interface Props {
  options: {
    countyOptions: Array<SelectAreaOption>;
    townOptionsMap?: Record<string, Array<SelectAreaOption>> | null;
  };
  changeSearch: (params: ChangeSearchParams) => void;
}

function InvoicingSearch({ options: { countyOptions, townOptionsMap }, changeSearch }: Props) {
  const [selectedCounty, setSelectedCounty] = useState(countyOptions.at(0));
  const [selectedTown, setSelectedTown] = useState<SelectAreaOption | null>(null);
  const townOptions = useMemo(() => {
    if (!townOptionsMap) return [];
    return townOptionsMap[selectedCounty?.value?.countyId ?? ''];
  }, [selectedCounty]);

  useEffect(() => {
    setSelectedTown(null);
  }, [selectedCounty]);

  return (
    <div className="flex items-center justify-between border-2 border-x-black border-t-black border-b-transparent px-5 pt-4 pb-3">
      <p className="text-xs md:text-lg">搜尋鄰里</p>
      <div className="flex gap-2">
        <Select
          defaultValue={selectedCounty}
          onChange={setSelectedCounty}
          options={countyOptions}
        />
        <Select
          value={selectedTown}
          onChange={setSelectedTown}
          options={townOptions}
        />
      </div>
      <SearchBtn
        className="icon w-5 md:w-8"
        onClick={() => changeSearch({ county: selectedCounty?.value, town: selectedTown?.value })}
      />
      <Info className="icon w-5 md:w-8" />
    </div>
  );
}

export default InvoicingSearch;
