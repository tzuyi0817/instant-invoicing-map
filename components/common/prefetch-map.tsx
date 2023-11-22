import { readMapFiles } from '@/utils/readFile';

async function PrefetchMap() {
  await readMapFiles();
  return null;
}

export default PrefetchMap;
