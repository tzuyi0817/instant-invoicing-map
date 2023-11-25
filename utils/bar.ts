import { interpolateRound, scaleLinear, axisBottom, scaleBand, axisLeft, type ScaleBand, type ScaleLinear } from 'd3';
import { createSvg } from './d3';
import type { SelectionD3, D3BarItem } from '@/types/d3';

class Bar {
  bar: SelectionD3<SVGSVGElement> | null = null;
  duration = 750;
  width = 0;
  height = 0;
  margin = 20;
  fontSize = 12;

  createBar(selector: string) {
    const container = document.querySelector(selector);
    const width = container?.clientWidth ?? 0;
    const height = container?.clientHeight ?? 0;

    this.bar = createSvg({ selector, height, width });
    this.width = width;
    this.height = height - this.margin;
  }

  drawBar(data: Array<D3BarItem>) {
    const x = scaleBand()
      .domain(data.map(item => item.name))
      .range([0, this.width])
      .padding(0.3);
    const y = scaleLinear().domain([0, 60]).range([this.height, 0]);

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
      .text('0%')
      .attr('transform', function () {
        return `translate(-${this.getBBox().width / 2},0)`;
      })
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
      .attr('transform', `translate(-${width / 2},-${width / 2 + 5})`)
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
