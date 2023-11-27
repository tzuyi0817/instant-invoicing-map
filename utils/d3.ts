import { select } from 'd3';
import ddpAvatar from '@/assets/images/avatar/ddp-avatar.png';
import kmtAvatar from '@/assets/images/avatar/kmt-avatar.png';
import pfpAvatar from '@/assets/images/avatar/pfp-avatar.png';
import type { CreateSvgParams } from '@/types/d3';
import type { MapTopologyProperties } from '@/types/map';

export function createSvg({ selector, width, height }: CreateSvgParams) {
  return select(selector).attr('width', width).attr('height', height).append('svg');
}

export function createTooltip(selector: string) {
  return select(selector).append('div').classed('tooltip', true);
}

export function createInvoicingInformation(properties: MapTopologyProperties) {
  const { countyName, townName, villageName, ddp, kmt, pfp } = properties;
  const title = [countyName, townName, villageName].filter(Boolean).join('/') || '全台';

  return `
  <div class="invoicing-information-title">${title}</div>
  <div style="padding: 16px 16px 8px">
    <div class="w-full overflow-hidden flex gap-[1px]" style="height: 26px; border-radius: 16px">
      <div class="tooltip-bar bg-deep-green pl-2" style="width: ${ddp}%">${ddp}%</div>
      <div class="tooltip-bar bg-deep-blue pl-1" style="width: ${kmt}%">${kmt}%</div>
      <div class="tooltip-bar bg-deep-orange pl-1" style="width: ${pfp}%">${pfp}%</div>
    </div>
    <div style="padding-top: 12px">
      <div class="invoicing-information-candidate">
        <div class="invoicing-information-content">
          <img src="${ddpAvatar.src}" alt="ddp avatar" />
          <p>蔡英文得票率</p>
        </div>
        <p class="text-deep-green">${ddp}%</p>
      </div>
      <div class="invoicing-information-candidate">
        <div class="invoicing-information-content">
          <img src="${kmtAvatar.src}" alt="kmt avatar" />
          <p>韓國瑜得票率</p>
        </div>
        <p class="text-deep-blue">${kmt}%</p>
      </div>
      <div class="invoicing-information-candidate">
        <div class="invoicing-information-content">
          <img src="${pfpAvatar.src}" alt="pfp avatar" />
          <p>宋楚瑜得票率</p>
        </div>
        <p class="text-deep-orange">${pfp}%</p>
      </div>
    </div>
  </div>
`;
}
