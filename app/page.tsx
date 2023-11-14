import TaiwanMap from '@/components/TaiwanMap';
import { readJsonFile } from '@/utils/readFile';

async function Home() {
  const topology = await readJsonFile('/assets/json/map.json');

  return (
    <main className="min-h-screen">
      <TaiwanMap topology={topology} />
    </main>
  );
}

export default Home;
