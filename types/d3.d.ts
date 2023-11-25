import type { Selection, BaseType } from 'd3';

export type SelectionD3<T extends BaseType> = Selection<T, unknown, HTMLElement, any>;

export interface CreateSvgParams {
  selector: string;
  width: number;
  height: number;
}

export interface D3BarItem {
  name: string;
  value: number;
  fill: string;
  image: string;
}
