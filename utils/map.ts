import { geoMercator, geoPath, select } from 'd3';
import { feature, mesh } from 'topojson-client';
import type { MapTopology } from '@/types/map';

class Map {
  static instance: Map | null = null;

  static getInstance() {
    if (Map.instance === null) {
      Map.instance = new Map();
    }
    return Map.instance;
  }

  draw(topology: MapTopology) {
    const { clientWidth, clientHeight } = document.body;
    const centerPoint: [number, number] = [123, 24];
    const projection = geoMercator().center(centerPoint).scale(5500);
    const path = geoPath(projection);

    select('.counties')
      .selectAll('path')
      .data(feature(topology, topology.objects['COUNTY_MOI_1090820']).features)
      .enter()
      .append('path')
      .attr('d', path);

    select('.county-borders').attr(
      'd',
      path(
        mesh(topology, topology.objects['COUNTY_MOI_1090820'], function (a, b) {
          return a !== b;
        }),
      ),
    );
  }
}

export default Map;
