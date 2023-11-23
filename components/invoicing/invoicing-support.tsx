import { useState } from 'react';
import InvoicingFilter from '@/components/invoicing/invoicing-filter';
import InvoicingBar from '@/components/invoicing/invoicing-bar';
import { INVOICING } from '@/configs/Invoicing';

function InvoicingSupport() {
  const [filter, setFilter] = useState({
    ddp: false,
    kmt: false,
    pfp: false,
  });

  return (
    <div className="px-6 py-8 border-black border-x-2 border-b-2">
      <InvoicingFilter
        filter={filter}
        setFilter={setFilter}
      />
      <div className="mt-4">
        <div className="flex">
          <p className="text-xs text-black/50 w-14">縣市</p>
          <p className="text-xs text-black/50">得票占比</p>
        </div>
        <ul className="mt-4">
          <li className="flex">
            <p className="text-xs w-14">基隆市</p>
            <InvoicingBar
              className="h-[14px] flex-1"
              proportion={INVOICING.default}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InvoicingSupport;
