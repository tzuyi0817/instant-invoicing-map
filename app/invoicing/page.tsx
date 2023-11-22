import InvoicingMap from '@/components/invoicing/invoicing-map';
import { readMapFiles } from '@/utils/readFile';

async function Invoicing() {
  const [county, town, village] = await readMapFiles();

  return (
    <>
      <InvoicingMap topology={{ county, town, village }} />
    </>
  );
}

export default Invoicing;
