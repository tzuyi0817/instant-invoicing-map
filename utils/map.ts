import { geoMercator, geoPath } from 'd3';
import { feature } from 'topojson-client';
import { createSvg, createTooltip } from './d3';
import type { SelectionD3 } from '@/types/d3';
import type { Topology } from '@/types/map';

class Map {
  static instance: Map | null = null;

  topology: Topology;
  countyFeature: GeoJSON.FeatureCollection;
  townFeature: GeoJSON.FeatureCollection;
  villageFeature: GeoJSON.FeatureCollection;

  map: SelectionD3<SVGSVGElement> | null = null;
  g: SelectionD3<SVGGElement> | null = null;
  mesh: SelectionD3<SVGPathElement> | null = null;
  tooltip: SelectionD3<HTMLDivElement> | null = null;
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
    // @ts-ignore
    this.townFeature = feature(this.topology.town, 'TOWN');
    // @ts-ignore
    this.villageFeature = feature(this.topology.village, 'VILLAGE');
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
    this.tooltip = createTooltip('.map-container');
    this.renderCounty();
  }

  renderCounty() {
    this.g
      ?.selectAll('path')
      .data(this.countyFeature.features)
      .enter()
      .append('path')
      .classed('county', true)
      .attr('d', this.path)
      .on('click', data => {})
      .on('mouseover', (_, data) => {
        this.tooltip?.style('opacity', 1).html(`<p>${data.properties?.['COUNTYNAME']}</p>`);
      })
      .on('mousemove', event => {
        this.tooltip?.style('left', `${event.pageX + 10}px`).style('top', `${event.pageY + 10}px`);
      })
      .on('mouseout', () => {
        this.tooltip?.style('opacity', 0);
      });

    this.translateMap();
  }

  translateMap() {
    this.g?.attr('transform', `translate(${this.x},${this.y})scale(${this.scale})`);
  }

  removeMap() {
    this.map?.remove();
    this.tooltip?.remove();
  }
}

export default Map;
