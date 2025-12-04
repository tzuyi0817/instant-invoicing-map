import { geoMercator, geoPath, select, type Selection } from 'd3';
import { feature } from 'topojson-client';
import { createSvg, createInvoicingInformation } from './d3';
import { MAP_AREA_COLOR, MAP_CONFIG, type MapConfigKey } from '@/constants/map';
import { INVOICING } from '@/constants/Invoicing';
import type { SelectionD3 } from '@/types/d3';
import type {
  Topology,
  MapFeature,
  MapSelectArea,
  MapArea,
  MapBackArea,
  MapSelect,
  MapTopologyProperties,
} from '@/types/map';

class Map {
  static instance: Map | null = null;

  countyFeature?: GeoJSON.FeatureCollection;
  townFeature?: GeoJSON.FeatureCollection;
  villageFeature?: GeoJSON.FeatureCollection;
  manualSelect: (area: MapArea | 'default', properties: MapTopologyProperties) => void;

  map: SelectionD3<SVGSVGElement> | null = null;
  g: SelectionD3<SVGGElement> | null = null;
  mesh: SelectionD3<SVGPathElement> | null = null;
  tooltip: SelectionD3<HTMLDivElement> | null = null;
  currentPath: Selection<SVGPathElement, unknown, null, undefined> | null = null;
  previousPath: Selection<SVGPathElement, unknown, null, undefined> | null = null;
  projection = geoMercator().center([123, 24]);
  path = geoPath(this.projection);
  width = 0;
  height = 0;
  x = 0;
  y = 0;
  scale = 1;
  translate = {
    default: { x: 0, y: 0, scale: 1 },
    county: { x: 0, y: 0, scale: 1 },
    town: { x: 0, y: 0, scale: 1 },
  };
  currentArea: MapArea = 'county';

  static getInstance(manualSelect: (area: MapArea | 'default', properties: MapTopologyProperties) => void) {
    if (Map.instance === null) {
      Map.instance = new Map(manualSelect);
    }
    return Map.instance;
  }

  constructor(manualSelect: (area: MapArea | 'default', properties: MapTopologyProperties) => void) {
    this.manualSelect = manualSelect;
  }

  setTopology(topology: Topology) {
    // @ts-ignore
    this.countyFeature = feature(topology.county, 'county');
    // @ts-ignore
    this.townFeature = feature(topology.town, 'town');
    // @ts-ignore
    this.villageFeature = feature(topology.village, 'village');
  }

  resetMap() {
    const container = document.querySelector('.map-container');

    if (!container) return;
    this.width = container.clientWidth;
    this.height = container.clientHeight;
    if (!this.height) return;
    const { x, y, scale } = MAP_CONFIG[this.height as MapConfigKey];

    this.removeMap();
    this.projection.scale(scale);
    this.translate.default.x = this.x = x;
    this.translate.default.y = this.y = y;
    this.scale = 1;
  }

  drawMap() {
    this.map = createSvg({
      selector: '.map',
      width: this.width,
      height: this.height,
    });
    this.g = this.map.append('g');
    this.tooltip = select('.map-container .tooltip');
    this.renderCounty();
  }

  renderCounty() {
    if (!this.countyFeature) return;
    this.drawArea('county', this.countyFeature.features);
    this.translateMap(0);
  }

  renderTown(county: MapFeature) {
    if (!this.townFeature) return;
    const towns = this.townFeature.features.filter(({ properties }) => {
      return properties?.countyId === county.properties.countyId;
    });

    this.drawArea('town', towns);
  }

  renderVillage(town: MapFeature) {
    if (!this.villageFeature) return;
    const villages = this.villageFeature.features.filter(({ properties }) => {
      return properties?.townId === town.properties.townId;
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
      .attr('data-area', area)
      .attr('data-id', ({ properties: { countyId, townId, villageId } }) => villageId ?? townId ?? countyId)
      .style('fill', data => {
        const { winner, winnerRate } = data.properties;

        return MAP_AREA_COLOR[<'ddp' | 'kmt' | 'pfp'>winner]?.[fillLevel(winnerRate)];
      })
      .on('click', async function (_, data) {
        const instance = Map.instance;

        if (!instance) return;
        instance.manualSelect(area, data.properties);
      })
      .on('mouseover', (_, data) => {
        this.tooltip?.style('opacity', 1).html(createInvoicingInformation(data.properties));
      })
      .on('mousemove', event => {
        const x = event.offsetX + 10;
        const max = this.width - 240;

        this.tooltip?.style('left', `${x > max ? max : x}px`).style('top', `${event.offsetY + 10}px`);
      })
      .on('mouseout', () => {
        this.tooltip?.style('opacity', 0);
      });
  }

  async moveToArea(area: MapArea, path: SVGPathElement, data: MapFeature) {
    if (area === 'village') return;
    this.clearBoundary(area);
    this.previousPath = this.currentPath;
    this.currentPath = select(path);
    this.drawBoundary(area);
    await this.clearMap(area);
    await this.boundsMap(area, data);
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
    const centerX = (x1 + x2) / 2;
    const centerY = (y1 + y2) / 2;

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

  async backArea({ x, y, scale, from, to }: MapBackArea) {
    this.clearArea(from);
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.clearBoundary(to);
    await this.translateMap();
    this.currentArea = to;
  }

  backToPreviousArea() {
    const backAreaMap = {
      county: null,
      town: async () => {
        const { x, y, scale } = this.translate.default;

        this.manualSelect('default', INVOICING.default);
        await this.backArea({ x, y, scale, from: 'town', to: 'county' });
      },
      village: async () => {
        const { x, y, scale } = this.translate.county;

        this.manualSelect('town', (<MapFeature>this.previousPath?.data()[0])?.properties);
        await this.backArea({ x, y, scale, from: 'village', to: 'town' });
        this.currentPath = this.previousPath;
        this.drawBoundary('county', false);
      },
    };
    return backAreaMap[this.currentArea]?.();
  }

  async selectArea({ id, parentId }: MapSelect) {
    const isTargetComplete = await this.checkArea(id);

    if (isTargetComplete) return;
    await this.checkArea(parentId);
    this.checkArea(id);
  }

  async checkArea(id: string) {
    const target = document.querySelector<SVGPathElement>(`[data-id="${id}"]`);
    if (!target) return false;
    const area = target.dataset.area as MapArea;

    await this.moveToArea(area, target, (<MapFeature>target).__data__);
    return true;
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

function fillLevel(value: number) {
  if (value > 70) return 'deep';
  if (value < 40) return 'shallow';
  return 'normal';
}

export default Map;
