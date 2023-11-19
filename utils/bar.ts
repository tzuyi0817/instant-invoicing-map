import { interpolateRound, scaleLinear, axisBottom, scaleBand, axisLeft } from 'd3';
import { createSvg } from './d3';
import type { SelectionD3, CreateSvgParams } from '@/types/d3';

class Bar {
  bar: SelectionD3<SVGSVGElement> | null = null;
  duration = 1500;
  previous: Array<number> = [];
  width = 0;
  height = 0;
  margin = 50;

  createBar(createSvgParams: CreateSvgParams) {
    this.bar = createSvg(createSvgParams);
    this.width = createSvgParams.width - this.margin * 2;
    this.height = createSvgParams.height - this.margin * 2;
  }

  drawVoteBar(data: Record<string, string | number>[]) {
    const sevenFat = [
      { name: 'HowHow', friend: 3 },
      { name: '蔡 Brother', friend: 13 },
      { name: '阿嘎', friend: 25 },
      { name: '馬叔叔', friend: 8 },
      { name: 'RJ', friend: 10 },
    ];

    const x = scaleBand()
      .domain(sevenFat.map(item => item.name))
      .range([0, this.width])
      .padding(0.2);
    const y = scaleLinear().domain([0, 60]).range([this.height, 0]);

    if (!this.bar) return;
    this.bar
      ?.append('g')
      .attr('transform', `translate(${this.margin},${this.height + this.margin})`)
      .transition()
      .duration(750)
      .call(axisBottom(x).tickSize(5))
      .selectAll('text')
      .style('font-size', '14px');

    this.bar
      ?.append('g')
      .attr('transform', `translate(${this.margin},${this.margin})`)
      .call(axisLeft(y).tickValues([0, 20, 40, 60]).tickSize(0))
      .selectAll('text')
      .style('font-size', '14px');

    this.bar
      ?.selectAll('bars')
      .data(sevenFat)
      .enter()
      .append('rect')
      .attr('x', item => `${x(item.name)}`)
      .attr('y', item => y(item.friend))
      .attr('fill', '#09c')
      .attr('transform', `translate(${this.margin},${this.margin})`)
      .attr('width', x.bandwidth())
      .attr('height', 0)
      .transition()
      .duration(750)
      .attr('height', item => (y(item.friend) < this.height ? this.height - y(item.friend) : this.height));
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
