import { interpolateRound } from 'd3';
import { createSvg } from './d3';
import type { SelectionD3, CreateSvgParams } from '@/types/d3';

class Bar {
  bar: SelectionD3<SVGSVGElement> | null = null;
  duration = 1500;

  createBar(createSvgParams: CreateSvgParams) {
    this.bar = createSvg(createSvgParams);
  }

  drawBar(data: Record<string, number>[]) {
    this.bar
      ?.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('fill', '#09c')
      .attr('width', 0)
      .attr('height', 30)
      .attr('x', 0)
      .attr('y', data => (data.x - 1) * 35)
      .transition()
      .duration(this.duration)
      .attr('width', data => data.w);
  }

  drawText(data: Record<string, number>[]) {
    this.bar
      ?.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(0)
      .attr('fill', '#000')
      .attr('x', 5)
      .attr('y', data => data.x * 35 - 12)
      .transition()
      .duration(this.duration)
      .attr('x', data => data.w + 5)
      .tween('number', data => {
        const interpolate = interpolateRound(0, data.w);

        return function (t) {
          this.textContent = `${interpolate(t)}`;
        };
      });
  }

  removeBar() {
    this.bar?.remove();
  }
}

export default Bar;
