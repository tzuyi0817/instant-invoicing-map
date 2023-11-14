import type { Selection, BaseType } from 'd3';

export type SelectionD3<T extends BaseType> = Selection<T, unknown, HTMLElement, any>;

export interface CreateSvgParams {
  selector: string;
  width: number;
  height: number;
}
