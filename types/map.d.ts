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
  objects: Record<MapArea, MapTopologyObject>;
}

export interface Topology {
  county: MapTopology;
  town: MapTopology;
  village: MapTopology;
}

export interface MapBackArea {
  x: number;
  y: number;
  scale: number;
  from: MapArea;
  to: MapSelectArea;
}

export interface MapTopologyObject {
  type: 'GeometryCollection';
  geometries: MapTopologyGeometry[];
}

export interface MapTopologyGeometry {
  type: 'Polygon';
  properties: MapTopologyProperties;
  id: string;
}

export interface MapTopologyProperties {
  countyId: string;
  countyName: string;
  kmt: number;
  ddp: number;
  pfp: number;
  winner: 'kmt' | 'ddp' | 'pfp';
  winnerRate: number;
  townName: string;
  townId: string;
}
