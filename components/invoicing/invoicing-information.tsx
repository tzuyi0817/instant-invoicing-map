import { useMemo } from 'react';
import Image from 'next/image';
import InvoicingBar from '@/components/invoicing/invoicing-bar';
import ddpAvatar from '@/assets/images/avatar/ddp-avatar.png';
import kmtAvatar from '@/assets/images/avatar/kmt-avatar.png';
import pfpAvatar from '@/assets/images/avatar/pfp-avatar.png';
import Counter from '@/hooks/useCounter';
import type { MapTopologyProperties } from '@/types/map';

interface Props {
  proportion: MapTopologyProperties;
}

function InvoicingInformation({ proportion }: Props) {
  const { countyName, townName, ddp, kmt, pfp } = proportion;
  const title = useMemo(() => {
    return [countyName, townName].filter(Boolean).join('/') || '全台';
  }, [proportion]);

  return (
    <div className="border-2 border-black mt-4">
      <div className="invoicing-information-title">{title}</div>
      <div className="px-4 py-8">
        <InvoicingBar
          className="h-[18px] md:h-9"
          proportion={proportion}
          showProportion
        />
        <div className="py-3">
          <div className="invoicing-information-candidate">
            <div className="invoicing-information-content">
              <Image
                src={ddpAvatar}
                alt="ddp avatar"
                className="w-12"
              />
              <p>蔡英文得票率</p>
            </div>
            <Counter
              className="text-deep-green"
              to={ddp}
            />
          </div>
          <div className="invoicing-information-candidate">
            <div className="invoicing-information-content">
              <Image
                src={kmtAvatar}
                alt="kmt avatar"
                className="w-12"
              />
              <p>韓國瑜得票率</p>
            </div>
            <Counter
              className="text-deep-blue"
              to={kmt}
            />
          </div>
          <div className="invoicing-information-candidate">
            <div className="invoicing-information-content">
              <Image
                src={pfpAvatar}
                alt="pfp avatar"
                className="w-12"
              />
              <p>宋楚瑜得票率</p>
            </div>
            <Counter
              className="text-deep-orange"
              to={pfp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoicingInformation;
