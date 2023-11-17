import BarChart from '@/components/bar/bar-chart';
import BarAxis from '@/components/bar/bar-axis';
import { readJsonFile } from '@/utils/readFile';

async function Page() {
  const county = await readJsonFile('/assets/json/vote/county.json');

  return (
    <main className="pt-20 px-3">
      <BarChart />
      <BarAxis county={county} />
    </main>
  );
}

export default Page;
