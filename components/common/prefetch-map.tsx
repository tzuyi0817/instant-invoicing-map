import { readMapFiles } from '@/utils/readFile';
import ContextMap from '@/components/common/context-map';

async function PrefetchMap() {
  const [county, town, village] = await readMapFiles();
  return <ContextMap topology={{ county, town, village }} />;
}

export default PrefetchMap;
