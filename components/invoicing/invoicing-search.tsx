import { useState, useMemo } from 'react';
import Select from '@/components/common/select';
import SearchBtn from '@/assets/images/svg/search-btn.svg';
import Info from '@/assets/images/svg/info.svg';
import type { SelectAreaOption } from '@/types/select';

interface ChangeSearchParams {
  county?: SelectAreaOption;
  town?: SelectAreaOption;
}

interface Props {
  options: {
    countyOptions: Array<SelectAreaOption>;
    townOptionsMap: Record<string, Array<SelectAreaOption>>;
  };
  changeSearch: (params: ChangeSearchParams) => void;
}

function InvoicingSearch({ options: { countyOptions, townOptionsMap }, changeSearch }: Props) {
  const [selectedCounty, setSelectedCounty] = useState(countyOptions.at(0));
  const [selectedTown, setSelectedTown] = useState<SelectAreaOption>();
  const townOptions = useMemo(() => {
    return townOptionsMap[selectedCounty?.value?.countyId ?? ''];
  }, [selectedCounty]);

  return (
    <div className="flex items-center justify-between border-2 border-x-black border-t-black border-b-transparent px-5 pt-4 pb-3">
      <p className="text-xs">搜尋鄰里</p>
      <div className="flex gap-2">
        <Select
          defaultValue={selectedCounty}
          onChange={setSelectedCounty}
          options={countyOptions}
        />
        <Select
          defaultValue={selectedTown}
          onChange={setSelectedTown}
          options={townOptions}
        />
      </div>
      <SearchBtn
        className="w-5"
        onClick={() => changeSearch({ county: selectedCounty, town: selectedTown })}
      />
      <Info className="w-5" />
    </div>
  );
}

export default InvoicingSearch;
