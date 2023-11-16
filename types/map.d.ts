import type { Feature } from 'topojson-client';

export type MapFeature = Feature<Geometry, GeoJsonProperties>;
export type MapArea = 'county' | 'town' | 'village';
export type MapSelectArea = Exclude<MapArea, 'village'>;

export interface MapTopology {
  type: 'Topology';
  arcs: Array<[number, number][]>;
  transform: {
    scale: [number, number];
    translate: [number, number];
  };
  objects: Record<string, any>;
}

export interface Topology {
  county: MapTopology;
  town: MapTopology;
  village: MapTopology;
}
