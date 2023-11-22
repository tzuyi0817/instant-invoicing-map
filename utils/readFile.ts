import { promises as fs } from 'fs';
import type { MapTopology } from '@/types/map';

export async function readJsonFile(path: string) {
  const json = await fs.readFile(process.cwd() + path, 'utf8');

  return JSON.parse(json);
}

export function readMapFiles(): Promise<[MapTopology, MapTopology, MapTopology]> {
  return Promise.all([
    readJsonFile('/assets/json/map/county.json'),
    readJsonFile('/assets/json/map/town.json'),
    readJsonFile('/assets/json/map/village.json'),
  ]);
}
