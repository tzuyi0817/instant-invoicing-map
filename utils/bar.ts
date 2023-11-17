import { interpolateRound, scaleLinear, max, axisBottom } from 'd3';
import { createSvg } from './d3';
import type { SelectionD3, CreateSvgParams } from '@/types/d3';

class Bar {
  bar: SelectionD3<SVGSVGElement> | null = null;
  duration = 1500;
  previous: Array<number> = [];
  width = 0;
  height = 0;

  createBar(createSvgParams: CreateSvgParams) {
    this.bar = createSvg(createSvgParams);
    this.width = createSvgParams.width;
    this.height = createSvgParams.height;
  }

  drawVoteBar(data: Record<string, string | number>[]) {
    const sevenFat = [
      { name: 'HowHow', friend: 3 },
      { name: '蔡 Brother', friend: 13 },
      { name: '阿嘎', friend: 25 },
      { name: '馬叔叔', friend: 8 },
      { name: 'RJ', friend: 10 },
    ];

    const scale = scaleLinear()
      .domain([0, max(sevenFat.map(item => item.friend))])
      .range([0, 300]);

    const axis = axisBottom(scale)
      .ticks(5)
      .tickFormat(item => item + '人');

    this.bar
      ?.selectAll('g')
      .data(sevenFat)
      .enter()
      .append('g')
      .append('rect')
      .attr('x', (item, i) => i * 60)
      .attr('y', 0)
      .attr('width', 50)
      .attr('height', item => scale(item.friend))
      .attr('fill', '#09c')
      .attr('transform', 'translate(100,125)');

    this.bar?.append('g').attr('transform', 'translate(95,125)').transition().duration(750).call(axis);
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

        this.previous[data.x - 1] = data.w;
        return function (t) {
          this.textContent = `${interpolate(t)}`;
        };
      });
  }

  changeData(data: Record<string, number>[]) {
    this.bar
      ?.selectAll('rect')
      .data(data)
      .transition()
      .duration(this.duration)
      .attr('width', data => data.w);

    this.bar
      ?.selectAll('text')
      .data(data)
      .transition()
      .duration(this.duration)
      .attr('x', data => data.w + 5)
      .tween('number', data => {
        const interpolate = interpolateRound(this.previous[data.x - 1] ?? 0, data.w);

        this.previous[data.x - 1] = data.w;
        return function (t) {
          (this as SVGTextElement).textContent = `${interpolate(t)}`;
        };
      });
  }

  removeBar() {
    this.bar?.remove();
  }
}

export default Bar;
