import { interpolateRound, scaleLinear, axisBottom, scaleBand, axisLeft, type ScaleBand, type ScaleLinear } from 'd3';
import { createSvg } from './d3';
import { BAR_CONFIG } from '@/configs/bar';
import type { SelectionD3, D3BarItem } from '@/types/d3';

class Bar {
  bar: SelectionD3<SVGSVGElement> | null = null;
  innerWidth = 0;
  duration = 750;
  width = 0;
  height = 0;
  margin = 0;
  fontSize = 12;
  padding = 0.3;

  get device() {
    if (this.innerWidth < 768) return 'mobile';
    if (this.innerWidth < 1024) return 'table';
    return 'desktop';
  }

  resetBar(selector: string) {
    this.innerWidth = window.innerWidth;
    const container = document.querySelector(selector);
    const { fontSize, margin } = BAR_CONFIG[this.device];

    if (!container) return;
    this.width = container.clientWidth;
    this.height = container.clientHeight - margin;
    this.fontSize = fontSize;
    this.margin = margin;
  }

  createBar(selector: string) {
    this.bar = createSvg({ selector, height: this.height + this.margin, width: this.width });
  }

  drawBar(data: Array<D3BarItem>) {
    const x = scaleBand()
      .domain(data.map(item => item.name))
      .range([0, this.width])
      .padding(this.padding);
    const y = scaleLinear().domain([0, 65]).range([this.height, 0]);

    this.drawAxisX(x);
    this.drawAxisY(y);
    this.bar
      ?.selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', item => `${x(item.name)}`)
      .attr('y', item => y(item.value))
      .attr('fill', item => item.fill)
      .attr('width', x.bandwidth())
      .attr('height', 0)
      .transition()
      .duration(this.duration)
      .attr('height', item => (y(item.value) < this.height ? this.height - y(item.value) : this.height));
    this.drawValue(data, x, y);
    this.drawImage(data, x, y);
  }

  drawAxisX(x: ScaleBand<string>) {
    this.bar
      ?.append('g')
      .attr('transform', `translate(0,${this.height})`)
      .transition()
      .duration(this.duration)
      .call(axisBottom(x).tickSize(5))
      .selectAll('text')
      .style('font-size', `${this.fontSize}px`);
  }

  drawAxisY(y: ScaleLinear<number, number, never>) {
    this.bar?.append('g').call(axisLeft(y).tickValues([0, 20, 40, 60]).tickSize(0));
  }

  drawValue(data: Array<D3BarItem>, x: ScaleBand<string>, y: ScaleLinear<number, number, never>) {
    this.bar
      ?.append('g')
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .classed('bar-value', true)
      .text('0%')
      .attr('fill', '#fff')
      .attr('x', item => `${(x(item.name) ?? 0) + x.bandwidth() / 2}`)
      .attr('y', item => y(item.value))
      .style('font-size', `${this.fontSize}px`)
      .transition()
      .duration(this.duration)
      .attr('y', y(0))
      .tween('number', data => {
        const interpolate = interpolateRound(0, data.value);

        return function (t) {
          this.textContent = `${interpolate(t)}%`;
        };
      });

    requestAnimationFrame(() => {
      this.bar?.selectAll('.bar-value').attr('transform', function () {
        return `translate(-${(<SVGTextElement>this).getBBox().width / 2},0)`;
      });
    });
  }

  drawImage(data: Array<D3BarItem>, x: ScaleBand<string>, y: ScaleLinear<number, number, never>) {
    const bandwidth = x.bandwidth();
    const width = bandwidth / 1.5;

    this.bar
      ?.append('g')
      .selectAll('image')
      .data(data)
      .enter()
      .append('image')
      .attr('transform', `translate(-${width / 2},-${width / 1.2})`)
      .attr('xlink:href', item => item.image)
      .attr('x', item => `${(x(item.name) ?? 0) + bandwidth / 2}`)
      .attr('y', item => y(item.value))
      .attr('width', width);
  }

  removeBar() {
    this.bar?.remove();
  }
}

export default Bar;
