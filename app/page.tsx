import Map from '@/components/home/map';
import { readJsonFile } from '@/utils/readFile';

async function Home() {
  const topology = await readJsonFile('/assets/json/map.json');

  return (
    <main className="min-h-screen">
      <Map topology={topology} />
    </main>
  );
}

export default Home;
