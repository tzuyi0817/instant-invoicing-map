import { geoMercator, geoPath } from 'd3';
import { feature } from 'topojson-client';
import { createSvg } from './d3';
import type { SelectionD3 } from '@/types/d3';
import type { Topology } from '@/types/map';

class Map {
  static instance: Map | null = null;

  topology: Topology;
  countyFeature: GeoJSON.FeatureCollection;

  map: SelectionD3<SVGSVGElement> | null = null;
  g: SelectionD3<SVGGElement> | null = null;
  mesh: SelectionD3<SVGPathElement> | null = null;
  projection = geoMercator().center([123, 24]).scale(6000);
  path = geoPath(this.projection);
  width = 0;
  height = 0;
  x = 200;
  y = 150;
  scale = 1;

  static getInstance(topology: Topology) {
    if (Map.instance === null) {
      Map.instance = new Map(topology);
    }
    return Map.instance;
  }

  constructor(topology: Topology) {
    this.topology = topology;
    // @ts-ignore
    this.countyFeature = feature(this.topology.county, 'COUNTY');
  }

  resetMap() {
    const { clientWidth, clientHeight } = document.body;

    this.width = clientWidth;
    this.height = clientHeight;
  }

  drawMap() {
    this.map = createSvg({
      selector: '#map',
      width: this.width,
      height: this.height,
    });
    this.g = this.map.append('g');
    this.renderCounty();
  }

  renderCounty() {
    this.g
      ?.selectAll('path')
      .data(this.countyFeature.features)
      .enter()
      .append('path')
      .classed('county', true)
      .attr('d', this.path);

    this.translateMap();
  }

  translateMap() {
    this.g?.attr('transform', `translate(${this.x},${this.y})scale(${this.scale})`);
  }

  removeMap() {
    this.map?.remove();
  }
}

export default Map;
