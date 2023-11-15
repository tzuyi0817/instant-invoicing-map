import Map from '@/components/home/map';
import { readJsonFile } from '@/utils/readFile';

async function Home() {
  const [county, town, village] = await Promise.all([
    readJsonFile('/assets/json/county.json'),
    readJsonFile('/assets/json/town.json'),
    readJsonFile('/assets/json/village.json'),
  ]);

  return (
    <main className="min-h-screen">
      <Map topology={{ county, town, village }} />
    </main>
  );
}

export default Home;
