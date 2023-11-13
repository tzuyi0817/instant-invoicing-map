export interface MapTopology {
  type: 'Topology';
  arcs: Array<[number, number][]>;
  transform: {
    scale: [number, number];
    translate: [number, number];
  };
  objects: Record<string, any>;
}
