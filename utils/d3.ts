import { select } from 'd3';
import type { CreateSvgParams } from '@/types/d3';

export function createSvg({ selector, width, height }: CreateSvgParams) {
  return select(selector).attr('width', width).attr('height', height).append('svg');
}

export function createTooltip(selector: string) {
  return select(selector).append('div').classed('tooltip', true);
}
