import { useState } from 'react';
import InvoicingFilter from '@/components/invoicing/Invoicing-filter';

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
    </div>
  );
}

export default InvoicingSupport;
