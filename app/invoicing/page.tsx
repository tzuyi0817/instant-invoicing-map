'use client';

import InvoicingSelect from '@/components/common/invoicing-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function Invoicing() {
  return (
    <main className="container">
      <InvoicingSelect
        defaultValue={options[0]}
        onChange={select => {}}
        options={options}
      />
    </main>
  );
}

export default Invoicing;
