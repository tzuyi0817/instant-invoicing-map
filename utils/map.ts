import { geoMercator, geoPath, select, type Selection } from 'd3';
import { feature } from 'topojson-client';
import { createSvg } from './d3';
import { MAP_AREA_NAME } from '@/configs/map';
import type { SelectionD3 } from '@/types/d3';
import type { Topology, MapFeature, MapSelectArea, MapArea, MapBackArea } from '@/types/map';

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
  currentPath: Selection<SVGPathElement, unknown, null, undefined> | null = null;
  previousPath: Selection<SVGPathElement, unknown, null, undefined> | null = null;
  projection = geoMercator().center([123, 24]).scale(6000);
  path = geoPath(this.projection);
  width = 0;
  height = 0;
  x = 200;
  y = 150;
  scale = 1;
  translate = {
    default: { x: this.x, y: this.y, scale: this.scale },
    county: { x: 0, y: 0, scale: 1 },
    town: { x: 0, y: 0, scale: 1 },
  };
  fillColor = { county: '#eab308', town: '#3b82f6', village: '#22c55e' };
  currentArea: MapArea = 'county';

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
    this.removeMap();
  }

  drawMap() {
    this.map = createSvg({
      selector: '.map',
      width: this.width,
      height: this.height,
    });
    this.g = this.map.append('g');
    this.tooltip = select('.map-container.tooltip');
    this.renderCounty();
  }

  renderCounty() {
    this.drawArea('county', this.countyFeature.features);
    this.translateMap(0);
  }

  renderTown(county: MapFeature) {
    const towns = this.townFeature.features.filter(({ properties }) => {
      return properties?.COUNTYID === county.properties.COUNTYID;
    });

    this.drawArea('town', towns);
  }

  renderVillage(town: MapFeature) {
    const villages = this.villageFeature.features.filter(({ properties }) => {
      return properties?.TOWNID === town.properties.TOWNID;
    });

    this.drawArea('village', villages);
  }

  drawArea(area: MapArea, features: MapFeature[]) {
    this.currentArea = area;
    this.g
      ?.selectAll(`.${area}`)
      .data(features)
      .enter()
      .append('path')
      .classed(area, true)
      .attr('d', this.path)
      .style('fill', this.fillColor[area])
      .on('click', async function (event, data) {
        if (area === 'village') return;
        const instance = Map.instance;

        if (!instance) return;
        instance.clearBoundary(area);
        instance.previousPath = instance.currentPath;
        instance.currentPath = select(this);
        instance.drawBoundary(area);
        await instance.clearMap(area);
        instance.boundsMap(area, data);
      })
      .on('mouseover', (_, data) => {
        this.tooltip?.style('opacity', 1).html(`<p>${data.properties?.[MAP_AREA_NAME[area]]}</p>`);
      })
      .on('mousemove', event => {
        this.tooltip?.style('left', `${event.pageX + 10}px`).style('top', `${event.pageY + 10}px`);
      })
      .on('mouseout', () => {
        this.tooltip?.style('opacity', 0);
      });
  }

  clearArea(area: MapArea, duration = 300) {
    return this.g?.selectAll(`.${area}`).data([]).exit().transition().duration(duration).remove().end();
  }

  clearMap(area: MapSelectArea) {
    const clear = {
      county: () => Promise.all([this.clearArea.call(this, 'town'), this.clearArea.call(this, 'village')]),
      town: this.clearArea.bind(this, 'village'),
    };

    return clear[area]();
  }

  async boundsMap(area: MapSelectArea, data: MapFeature) {
    const bounds = this.path.bounds(data);
    const renderMap = {
      county: this.renderTown.bind(this),
      town: this.renderVillage.bind(this),
    } as const;

    await this.zoomMap(area, bounds);
    renderMap[area](data);
  }

  zoomMap(area: MapSelectArea, bounds: [[number, number], [number, number]]) {
    const [[x1, y1], [x2, y2]] = bounds;
    const distanceX = x2 - x1;
    const distanceY = y2 - y1;
    const centerX = x1 + distanceX / 2;
    const centerY = y1 + distanceY / 2;

    this.scale = 0.8 / Math.max(distanceX / this.width, distanceY / this.height);
    this.x = this.width / 2 - this.scale * centerX;
    this.y = this.height / 2 - this.scale * centerY;
    this.translate[area].x = this.x;
    this.translate[area].y = this.y;
    this.translate[area].scale = this.scale;
    return this.translateMap();
  }

  drawBoundary(area: MapSelectArea, isRaise = true) {
    if (!this.currentPath) return;
    this.currentPath.classed(`${area}-active`, true);
    isRaise && this.currentPath.raise();
  }

  clearBoundary(area: MapSelectArea) {
    if (!this.currentPath) return;
    this.currentPath.classed(`${area}-active`, false).classed('county-active', false);
  }

  backArea({ x, y, scale, from, to }: MapBackArea) {
    this.clearArea(from);
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.clearBoundary(to);
    this.translateMap();
    this.currentArea = to;
  }

  backToPreviousArea() {
    const backAreaMap = {
      county: null,
      town: () => {
        const { x, y, scale } = this.translate.default;

        this.backArea({ x, y, scale, from: 'town', to: 'county' });
      },
      village: () => {
        const { x, y, scale } = this.translate.county;

        this.backArea({ x, y, scale, from: 'village', to: 'town' });
        this.currentPath = this.previousPath;
        this.drawBoundary('county', false);
      },
    };
    backAreaMap[this.currentArea]?.();
  }

  translateMap(duration = 800) {
    return this.g
      ?.transition()
      .duration(duration)
      .attr('transform', `translate(${this.x},${this.y})scale(${this.scale})`)
      .end();
  }

  removeMap() {
    this.map?.remove();
  }
}

export default Map;
