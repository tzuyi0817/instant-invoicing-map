import { geoMercator, geoPath } from 'd3';
import { feature } from 'topojson-client';
import { createSvg } from './d3';
import type { SelectionD3 } from '@/types/d3';
import type { MapTopology } from '@/types/map';

class Map {
  static instance: Map | null = null;

  map: SelectionD3<SVGSVGElement> | null = null;
  g: SelectionD3<SVGGElement> | null = null;
  mesh: SelectionD3<SVGPathElement> | null = null;
  geoMapFeature: GeoJSON.FeatureCollection | null = null;
  projection = geoMercator().center([123, 24]).scale(5500);
  path = geoPath(this.projection);
  width = 0;
  height = 0;

  static getInstance() {
    if (Map.instance === null) {
      Map.instance = new Map();
    }
    return Map.instance;
  }

  resetMap() {
    const { clientWidth, clientHeight } = document.body;

    this.width = clientWidth;
    this.height = clientHeight;
  }

  drawMap(topology: MapTopology) {
    this.map = createSvg({
      selector: '#map',
      width: this.width,
      height: this.height,
    });
    this.g = this.map.append('g');
    // @ts-ignore
    this.geoMapFeature = feature(topology, 'COUNTY');
    this.renderCounty();
  }

  renderCounty() {
    if (!this.geoMapFeature) return;
    this.g
      ?.selectAll('path')
      .data(this.geoMapFeature.features)
      .enter()
      .append('path')
      .attr('class', 'county')
      .attr('d', this.path);
  }

  removeMap() {
    this.map?.remove();
  }
}

export default Map;
